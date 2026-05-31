<template>
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
      @click="triggerTestNote"
      :disabled="!audioStore.isInitialized"
      class="flex items-center gap-2 rounded-lg border border-purple-500/50 px-4 py-2 font-semibold text-purple-300 transition disabled:opacity-50 hover:bg-purple-500/10"
    >
      🎵 Test Note
    </button>

    <!-- BPM Display -->
    <div class="ml-auto flex items-center gap-3 border-l border-gray-700 pl-4">
      <span class="text-sm text-gray-400">BPM:</span>
      <input
        :value="audioStore.bpm"
        @input="updateBpm"
        type="number"
        min="40"
        max="300"
        class="w-16 rounded bg-gray-800 px-2 py-1 text-center text-white outline-none"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAudioStore } from '@/stores/audio'

const audioStore = useAudioStore()

function triggerTestNote() {
  // In a real app, this would call a method on the engine or store
  console.log('Trigger test note')
}

function updateBpm(event: Event) {
  const value = (event.target as HTMLInputElement).valueAsNumber
  audioStore.updateBpm(value)
}
</script>
