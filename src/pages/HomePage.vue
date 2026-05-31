<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
    <!-- Hero Section -->
    <section class="px-4 py-20">
      <div class="mx-auto max-w-4xl text-center">
        <!-- Logo/Title -->
        <h1 class="mb-6 text-6xl font-bold">
          <span class="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Beat Royale DAW
          </span>
        </h1>

        <!-- Subtitle -->
        <p class="mb-8 text-xl text-gray-300">
          Create stunning beats and music patterns in your browser. No downloads. No installations. Pure creativity.
        </p>

        <!-- CTA Buttons -->
        <div class="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <RouterLink
            to="/register"
            class="rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 text-lg font-semibold text-white transition hover:from-purple-600 hover:to-pink-600 active:scale-95"
          >
            Get Started Free
          </RouterLink>
          <RouterLink
            to="/login"
            class="rounded-lg border border-purple-500 bg-transparent px-8 py-3 text-lg font-semibold text-purple-300 transition hover:bg-purple-500/10"
          >
            Sign In
          </RouterLink>
        </div>

        <!-- Feature Preview -->
        <div class="mb-20">
          <div class="rounded-xl border border-purple-500/20 bg-black/30 p-8 backdrop-blur">
            <svg
              class="mx-auto mb-8 h-40 w-full max-w-md"
              viewBox="0 0 400 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <!-- Grid pattern -->
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path
                    d="M 20 0 L 0 0 0 20"
                    fill="none"
                    stroke="rgba(168,85,247,0.2)"
                    stroke-width="0.5"
                  />
                </pattern>
              </defs>
              <rect width="400" height="200" fill="url(#grid)" />

              <!-- Sequencer steps -->
              <g>
                <circle cx="30" cy="80" r="8" fill="#a855f7" />
                <circle cx="70" cy="100" r="8" fill="#a855f7" opacity="0.5" />
                <circle cx="110" cy="70" r="8" fill="#a855f7" />
                <circle cx="150" cy="120" r="8" fill="#a855f7" opacity="0.5" />
                <circle cx="190" cy="60" r="8" fill="#a855f7" />
                <circle cx="230" cy="110" r="8" fill="#a855f7" opacity="0.5" />
                <circle cx="270" cy="90" r="8" fill="#a855f7" />
                <circle cx="310" cy="130" r="8" fill="#a855f7" opacity="0.5" />
                <circle cx="350" cy="75" r="8" fill="#a855f7" />
              </g>

              <!-- Connection lines -->
              <polyline
                points="30,80 70,100 110,70 150,120 190,60 230,110 270,90 310,130 350,75"
                fill="none"
                stroke="#a855f7"
                stroke-width="2"
                opacity="0.3"
              />
            </svg>
            <p class="text-gray-400">Visual sequencer and pattern creation</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="border-t border-purple-500/20 bg-black/30 px-4 py-20 backdrop-blur">
      <div class="mx-auto max-w-5xl">
        <h2 class="mb-16 text-center text-4xl font-bold text-white">Features</h2>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <!-- Feature 1 -->
          <div class="rounded-lg border border-purple-500/20 bg-purple-500/5 p-6">
            <div class="mb-4 text-3xl">🎹</div>
            <h3 class="mb-2 text-xl font-semibold text-white">Musical Sequencer</h3>
            <p class="text-gray-400">Create melodies and patterns with our 32-step visual sequencer</p>
          </div>

          <!-- Feature 2 -->
          <div class="rounded-lg border border-pink-500/20 bg-pink-500/5 p-6">
            <div class="mb-4 text-3xl">🎵</div>
            <h3 class="mb-2 text-xl font-semibold text-white">Multiple Tracks</h3>
            <p class="text-gray-400">Layer up to 8 tracks with different instruments and patterns</p>
          </div>

          <!-- Feature 3 -->
          <div class="rounded-lg border border-purple-500/20 bg-purple-500/5 p-6">
            <div class="mb-4 text-3xl">🎧</div>
            <h3 class="mb-2 text-xl font-semibold text-white">Real-time Playback</h3>
            <p class="text-gray-400">Hear your creations instantly with built-in Tone.js synthesis</p>
          </div>

          <!-- Feature 4 -->
          <div class="rounded-lg border border-pink-500/20 bg-pink-500/5 p-6">
            <div class="mb-4 text-3xl">📥</div>
            <h3 class="mb-2 text-xl font-semibold text-white">Export to MIDI</h3>
            <p class="text-gray-400">Download your compositions as standard MIDI files</p>
          </div>

          <!-- Feature 5 -->
          <div class="rounded-lg border border-purple-500/20 bg-purple-500/5 p-6">
            <div class="mb-4 text-3xl">☁️</div>
            <h3 class="mb-2 text-xl font-semibold text-white">Cloud Projects</h3>
            <p class="text-gray-400">Save and access your projects from anywhere</p>
          </div>

          <!-- Feature 6 -->
          <div class="rounded-lg border border-pink-500/20 bg-pink-500/5 p-6">
            <div class="mb-4 text-3xl">🚀</div>
            <h3 class="mb-2 text-xl font-semibold text-white">No Setup Required</h3>
            <p class="text-gray-400">Works directly in your browser with zero installation</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="px-4 py-20">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="mb-4 text-4xl font-bold text-white">Ready to Make Beats?</h2>
        <p class="mb-8 text-lg text-gray-400">Join musicians creating extraordinary music with Beat Royale</p>
        <RouterLink
          to="/register"
          class="inline-block rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 text-lg font-semibold text-white transition hover:from-purple-600 hover:to-pink-600 active:scale-95"
        >
          Create Your First Beat
        </RouterLink>
      </div>
    </section>

    <!-- Footer -->
    <footer class="border-t border-gray-800 bg-black/50 px-4 py-8">
      <div class="mx-auto max-w-7xl text-center text-sm text-gray-500">
        <p>&copy; 2026 Beat Royale. Create music, create magic.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
