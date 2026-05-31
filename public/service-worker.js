const VERSION       = 'beat-royale-daw-v1';
const STATIC_CACHE  = `static-${VERSION}`;
const RUNTIME_CACHE = `runtime-${VERSION}`;
const SAMPLE_CACHE  = `samples-${VERSION}`;

const PRECACHE_URLS = [
  './',
  './index.html',
  'https://unpkg.com/vue@3/dist/vue.global.js',
  'https://cdn.tailwindcss.com',
  'https://cdnjs.cloudflare.com/ajax/libs/tone/14.8.49/Tone.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(STATIC_CACHE);
    await Promise.allSettled(
      PRECACHE_URLS.map((url) =>
        cache.add(new Request(url, { cache: 'reload' })).catch(() => {})
      )
    );
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(
      keys.filter((k) => !k.endsWith(VERSION)).map((k) => caches.delete(k))
    );
    await self.clients.claim();
  })());
});

const isSample = (url) =>
  url.hostname.includes('githubusercontent.com') ||
  /\.(wav|mp3|ogg|flac|m4a|aac|opus)(\?|$)/i.test(url.pathname);

const isStaticCDN = (url) =>
  ['unpkg.com', 'cdn.tailwindcss.com', 'cdnjs.cloudflare.com', 'jsdelivr.net']
    .some((host) => url.hostname.includes(host));

async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  const network = fetch(request)
    .then((res) => {
      if (res && (res.ok || res.type === 'opaque')) cache.put(request, res.clone());
      return res;
    })
    .catch(() => null);
  return cached || (await network) || Response.error();
}

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  let url;
  try { url = new URL(request.url); } catch (e) { return; }

  const accept = request.headers.get('accept') || '';
  if (request.mode === 'navigate' || accept.includes('text/html')) {
    event.respondWith((async () => {
      try {
        const fresh = await fetch(request);
        const cache = await caches.open(STATIC_CACHE);
        cache.put(request, fresh.clone());
        return fresh;
      } catch (e) {
        const cached =
          (await caches.match(request)) ||
          (await caches.match('./index.html')) ||
          (await caches.match('./'));
        return cached || Response.error();
      }
    })());
    return;
  }

  if (isSample(url)) {
    event.respondWith(staleWhileRevalidate(request, SAMPLE_CACHE));
    return;
  }

  if (isStaticCDN(url)) {
    event.respondWith(staleWhileRevalidate(request, STATIC_CACHE));
    return;
  }

  event.respondWith((async () => {
    const cached = await caches.match(request);
    if (cached) return cached;
    try {
      const fresh = await fetch(request);
      if (fresh && (fresh.ok || fresh.type === 'opaque')) {
        const cache = await caches.open(RUNTIME_CACHE);
        cache.put(request, fresh.clone());
      }
      return fresh;
    } catch (e) {
      return cached || Response.error();
    }
  })());
});

self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});
