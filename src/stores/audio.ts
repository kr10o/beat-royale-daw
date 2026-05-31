import { defineStore } from 'pinia'
import { ref, shallowRef } from 'vue'
import * as Tone from 'tone'

export const useAudioStore = defineStore('audio', () => {
  const isInitialized = ref(false)
  const isPlaying = ref(false)
  const bpm = ref(120)
  
  // Use shallowRef for heavy audio objects so Vue doesn't waste CPU making them deeply reactive
  const synth = shallowRef<Tone.Synth | null>(null)

  // 1. The Critical Browser Audio Context Unlock
  async function initAudio() {
    if (isInitialized.value) return

    // Start the Web Audio context (resolves on user interaction)
    await Tone.start()
    
    // Initialize a basic synthesizer for testing purposes
    synth.value = new Tone.Synth().toDestination()
    
    // Set default BPM
    Tone.getTransport().bpm.value = bpm.value
    
    isInitialized.value = true
    console.log('🔊 Tone.js Audio Context fully unlocked and ready.')
  }

  // 2. Transport Controls
  function togglePlayback() {
    if (!isInitialized.value) return

    if (isPlaying.value) {
      Tone.getTransport().stop()
      isPlaying.value = false
    } else {
      Tone.getTransport().start()
      isPlaying.value = true
    }
  }

  // 3. Trigger a Test Sound
  function triggerTestNote() {
    if (synth.value && isInitialized.value) {
      // Play a C4 note for the duration of an 8th note right now
      synth.value.triggerAttackRelease('C4', '8n')
    }
  }

  // 4. Update BPM globally
  function updateBpm(newBpm: number) {
    bpm.value = newBpm
    Tone.getTransport().bpm.value = newBpm
  }

  return {
    isInitialized,
    isPlaying,
    bpm,
    initAudio,
    togglePlayback,
    triggerTestNote,
    updateBpm
  }
})