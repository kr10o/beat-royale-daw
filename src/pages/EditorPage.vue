<template>
  <div class="px-4 py-8">
    <div class="rounded-lg border border-purple-500/20 bg-black/30 p-6 backdrop-blur">
      <!-- Header -->
      <div class="mb-6 flex items-center justify-between">
        <div>
          <h1 class="text-2xl font-bold text-white">Music Editor</h1>
          <p class="text-sm text-gray-400">Create your next beat</p>
        </div>
        <button
          @click="initAudio"
          :disabled="audioStore.isInitialized"
          class="flex items-center gap-2 rounded-lg bg-purple-500 px-4 py-2 font-semibold text-white transition disabled:opacity-50 hover:bg-purple-600"
        >
          <span v-if="!audioStore.isInitialized">🔊 Initialize Audio</span>
          <span v-else>✓ Audio Ready</span>
        </button>
      </div>

      <!-- Playback Controls -->
      <div class="mb-6 flex gap-2 border-b border-gray-700 pb-6">
        <button
          @click="audioStore.togglePlayback"
          :disabled="!audioStore.isInitialized"
          class="flex items-center gap-2 rounded-lg bg-pink-500 px-4 py-2 font-semibold text-white transition disabled:opacity-50 hover:bg-pink-600"
        >
          <span v-if="!audioStore.isPlaying">▶ Play</span>
          <span v-else>⏸ Stop</span>
        </button>
        <button
          @click="audioStore.triggerTestNote"
          :disabled="!audioStore.isInitialized"
          class="flex items-center gap-2 rounded-lg border border-purple-500/50 px-4 py-2 font-semibold text-purple-300 transition disabled:opacity-50 hover:bg-purple-500/10"
        >
          🎵 Test Note
        </button>

        <!-- BPM Display -->
        <div class="ml-auto flex items-center gap-3 border-l border-gray-700 pl-4">
          <span class="text-sm text-gray-400">BPM:</span>
          <input
            v-model.number="audioStore.bpm"
            type="number"
            min="40"
            max="300"
            class="w-16 rounded bg-gray-800 px-2 py-1 text-center text-white outline-none"
          />
        </div>
      </div>

      <!-- Coming Soon Section -->
      <div class="rounded-lg border border-amber-500/20 bg-amber-500/5 p-6 text-center">
        <div class="mb-3 text-4xl">🎛️</div>
        <h2 class="mb-2 text-xl font-bold text-amber-300">Sequencer Coming Soon</h2>
        <p class="mb-4 text-gray-400">
          The visual 32-step sequencer with multiple tracks will be fully integrated here. For now, use the test note to
          verify audio is working.
        </p>
        <div class="flex justify-center gap-4 text-xs text-gray-500">
          <span>✓ Audio playback</span>
          <span>✓ BPM control</span>
          <span>✓ Tone.js integration</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAudioStore } from '@/stores/audio'

const audioStore = useAudioStore()

async function initAudio() {
  await audioStore.initAudio()
}
</script>

<style scoped></style>
