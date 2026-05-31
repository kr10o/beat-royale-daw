<template>
  <div class="rounded bg-gray-900 p-2 text-white">
    <div class="mb-2 flex items-center justify-between border-b border-gray-800 pb-2">
      <span class="text-xs font-bold uppercase">{{ track.name }}</span>
      <div class="flex gap-1">
        <button
          :class="track.muted ? 'bg-red-500 text-white' : 'bg-gray-800 text-gray-400'"
          class="h-6 w-6 rounded text-[10px] font-bold"
          @click="toggleMute"
        >M</button>
        <button
          :class="track.soloed ? 'bg-yellow-500 text-black' : 'bg-gray-800 text-gray-400'"
          class="h-6 w-6 rounded text-[10px] font-bold"
          @click="toggleSolo"
        >S</button>
      </div>
    </div>
    
    <!-- Volume Slider (Vertical-ish representation) -->
    <div class="relative h-48 w-full rounded bg-black/50">
      <div 
        class="absolute bottom-0 w-full bg-gradient-to-t from-purple-600 to-pink-500 transition-all"
        :style="{ height: `${track.volume * 100}%` }"
      ></div>
      <input 
        type="range" 
        min="0" 
        max="1" 
        step="0.01"
        v-model.number="track.volume"
        class="absolute inset-0 h-full w-full rotate-270 opacity-0 cursor-pointer"
      />
    </div>
    
    <div class="mt-2 text-center text-[10px] font-mono text-gray-500">
      {{ (track.volume * 100).toFixed(0) }}%
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Track } from '@/types'

const props = defineProps<{
  track: Track
}>()

function toggleMute() {
  props.track.muted = !props.track.muted
}

function toggleSolo() {
  props.track.soloed = !props.track.soloed
}
</script>

<style scoped>
.rotate-270 {
  transform: rotate(-90deg);
}
</style>
