import * as Tone from 'tone'

/**
 * The AudioEngine class acts as a bridge between the reactive Vue state
 * and the low-level Tone.js audio graph.
 */
export class AudioEngine {
  private static instance: AudioEngine;
  private isInitialized = false;

  private constructor() {}

  public static getInstance(): AudioEngine {
    if (!AudioEngine.instance) {
      AudioEngine.instance = new AudioEngine();
    }
    return AudioEngine.instance;
  }

  public async init() {
    if (this.isInitialized) return;
    await Tone.start();
    this.isInitialized = true;
    console.log('Audio Engine Initialized');
  }

  public get transport() {
    return Tone.getTransport();
  }

  public start() {
    this.transport.start();
  }

  public stop() {
    this.transport.stop();
  }

  public setBpm(val: number) {
    this.transport.bpm.value = val;
  }
}

export const engine = AudioEngine.getInstance();
