import { defineStore } from 'pinia'
import { ref } from 'vue'
import { engine } from '@/engine'

export const useAudioStore = defineStore('audio', () => {
  const isInitialized = ref(false)
  const isPlaying = ref(false)
  const bpm = ref(120)

  async function initAudio() {
    if (isInitialized.value) return
    await engine.init()
    engine.setBpm(bpm.value)
    isInitialized.value = true
  }

  function togglePlayback() {
    if (!isInitialized.value) return

    if (isPlaying.value) {
      engine.stop()
      isPlaying.value = false
    } else {
      engine.start()
      isPlaying.value = true
    }
  }

  function updateBpm(newBpm: number) {
    bpm.value = newBpm
    engine.setBpm(newBpm)
  }

  return {
    isInitialized,
    isPlaying,
    bpm,
    initAudio,
    togglePlayback,
    updateBpm
  }
})
