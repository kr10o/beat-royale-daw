<template>
  <div class="container mx-auto px-4 py-8">
    <div class="mb-8 rounded-2xl bg-gradient-to-r from-purple-900 to-pink-900 p-8 shadow-xl">
      <h1 class="mb-2 text-4xl font-black italic text-white uppercase tracking-tighter">Beat Royale</h1>
      <p class="text-purple-200">The daily competitive beat-making battle.</p>
    </div>

    <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <!-- Active Battle -->
      <div class="lg:col-span-2">
        <h2 class="mb-4 text-xl font-bold text-white">🔥 Live Battle: "Neon Nights"</h2>
        <div class="rounded-xl border border-white/10 bg-black/40 p-6 backdrop-blur-sm">
          <div class="mb-6 flex items-center justify-between">
            <div class="flex items-center gap-4">
              <div class="h-12 w-12 rounded-full bg-pink-500 flex items-center justify-center text-2xl">🏆</div>
              <div>
                <p class="text-sm text-gray-400">Current Leader</p>
                <p class="font-bold text-white">Producer_X</p>
              </div>
            </div>
            <div class="text-right">
              <p class="text-sm text-gray-400">Time Remaining</p>
              <p class="font-mono text-xl font-bold text-pink-400">14:22:05</p>
            </div>
          </div>
          <button class="w-full rounded-lg bg-pink-500 py-3 font-bold text-white transition hover:bg-pink-600">
            Join the Royale
          </button>
        </div>
      </div>

      <!-- Leaderboard -->
      <div>
        <h2 class="mb-4 text-xl font-bold text-white">Top Producers</h2>
        <div class="rounded-xl border border-white/10 bg-white/5 p-4">
          <ul class="space-y-4">
            <li v-for="i in 5" :key="i" class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <span class="font-mono text-gray-500">#{{ i }}</span>
                <span class="text-white">User_{{ i }}</span>
              </div>
              <span class="font-bold text-purple-400">{{ 1000 - i * 50 }} pts</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
