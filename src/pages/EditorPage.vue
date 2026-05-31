<template>
  <div class="flex h-full flex-col bg-black text-gray-100">
    <!-- Main Toolbar -->
    <Toolbar :is-recording="false">
      <template #transport>
        <TransportControls />
      </template>
    </Toolbar>

    <main class="flex-1 overflow-hidden p-4 space-y-4">
      <!-- Top Section: Timeline/Sequencer -->
      <section class="flex-1 overflow-y-auto">
        <Timeline />
      </section>

      <!-- Bottom Section: Mixer -->
      <section class="h-80 border-t border-white/5 pt-4">
        <Mixer :tracks="tracks" />
      </section>
    </main>

    <!-- Project Init Overlay -->
    <div 
      v-if="!audioStore.isInitialized" 
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
    >
      <div class="text-center">
        <h2 class="mb-6 text-3xl font-bold text-white">Ready to create?</h2>
        <button
          @click="initAudio"
          class="rounded-full bg-purple-500 px-12 py-4 text-xl font-bold text-white shadow-lg shadow-purple-500/20 transition hover:scale-105 hover:bg-purple-600"
        >
          Initialize Audio Engine
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAudioStore } from '@/stores/audio'
import Toolbar from '@/components/Toolbar.vue'
import TransportControls from '@/components/TransportControls.vue'
import Timeline from '@/components/Timeline.vue'
import Mixer from '@/components/Mixer.vue'
import type { Track } from '@/types'

const audioStore = useAudioStore()

const tracks = ref<Track[]>([
  { id: '1', name: 'Kick', type: 'sampler', volume: 0.8, muted: false, soloed: false, pan: 0 },
  { id: '2', name: 'Snare', type: 'sampler', volume: 0.7, muted: false, soloed: false, pan: 0 },
  { id: '3', name: 'Synth Bass', type: 'synth', volume: 0.6, muted: false, soloed: false, pan: 0 },
])

async function initAudio() {
  await audioStore.initAudio()
}
</script>

<style scoped>
/* Ensure the editor takes full height minus potential layout headers */
main {
  height: calc(100vh - 48px); /* 48px is Toolbar height */
}
</style>
