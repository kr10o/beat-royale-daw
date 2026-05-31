<template>
  <div class="rounded-lg border border-white/5 bg-black/40 p-4 backdrop-blur-md">
    <div class="mb-4 flex items-center justify-between">
      <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider">Mixer</h3>
      <div class="flex gap-2">
        <button class="text-xs text-gray-500 hover:text-white">Master</button>
      </div>
    </div>
    
    <div class="flex gap-4 overflow-x-auto pb-2">
      <MixerStrip 
        v-for="track in tracks" 
        :key="track.id" 
        :track="track" 
        class="min-w-[100px]"
      />
      
      <!-- Add Track Button -->
      <button class="flex min-w-[100px] flex-col items-center justify-center rounded border-2 border-dashed border-white/5 bg-transparent transition hover:border-purple-500/30 hover:bg-white/5">
        <span class="text-2xl text-gray-600">+</span>
        <span class="text-[10px] font-bold text-gray-600 uppercase">Add Track</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Track } from '@/types'
import MixerStrip from '@/components/MixerStrip.vue'

defineProps<{
  tracks: Track[]
}>()
</script>
