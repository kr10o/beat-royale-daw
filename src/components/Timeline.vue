<template>
  <div class="rounded-lg border border-white/5 bg-black/20 p-4">
    <div class="mb-4 flex items-center justify-between">
      <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider">Timeline</h3>
      <div class="flex gap-2 text-xs">
        <span class="text-purple-400">01:01:00</span>
      </div>
    </div>
    
    <div class="relative overflow-x-auto">
      <!-- Sequencer Grid Placeholder -->
      <div class="grid grid-cols-32 gap-px bg-gray-800 border border-gray-800">
        <div 
          v-for="i in 32" 
          :key="i" 
          class="h-32 w-8 bg-gray-900 transition hover:bg-gray-800 border-r border-gray-800"
          :class="{ 'border-r-gray-600': i % 4 === 0 }"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid-cols-32 {
  grid-template-columns: repeat(32, minmax(0, 1fr));
}
</style>
