export interface Track {
  id: string;
  name: string;
  type: 'synth' | 'sampler';
  volume: number;
  muted: boolean;
  soloed: boolean;
  pan: number;
}

export interface Project {
  id: string;
  name: string;
  bpm: number;
  tracks: Track[];
  createdAt: number;
  updatedAt: number;
}

export interface Note {
  id: string;
  trackId: string;
  time: string; // Tone.Time format (e.g., "0:0:0")
  duration: string;
  note: string;
  velocity: number;
}
