<template>
  <div class="container mx-auto px-4 py-8">
    <header class="mb-8 flex items-center justify-between">
      <h1 class="text-3xl font-bold text-white">My Beats</h1>
      <router-link
        to="/editor"
        class="rounded-lg bg-purple-500 px-6 py-2 font-bold text-white transition hover:bg-purple-600"
      >
        + New Beat
      </router-link>
    </header>

    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="project in projects"
        :key="project.id"
        class="group relative rounded-xl border border-white/10 bg-white/5 p-6 transition hover:border-purple-500/50 hover:bg-white/10"
      >
        <div class="mb-4 flex items-start justify-between">
          <div>
            <h3 class="text-xl font-semibold text-white">{{ project.name }}</h3>
            <p class="text-sm text-gray-400">BPM: {{ project.bpm }} | Tracks: {{ project.tracks.length }}</p>
          </div>
          <div class="flex gap-2">
            <button class="text-gray-400 hover:text-white">✏️</button>
            <button class="text-gray-400 hover:text-red-400">🗑️</button>
          </div>
        </div>
        <div class="mt-4 flex gap-2">
          <router-link
            :to="`/editor?id=${project.id}`"
            class="flex-1 rounded bg-purple-500/20 py-2 text-center text-sm font-semibold text-purple-300 transition hover:bg-purple-500/30"
          >
            Open Editor
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Project } from '@/types'

const projects = ref<Project[]>([
  {
    id: '1',
    name: 'Cyberpunk Bass',
    bpm: 124,
    tracks: [],
    createdAt: Date.now(),
    updatedAt: Date.now()
  },
  {
    id: '2',
    name: 'Lo-Fi Chill',
    bpm: 88,
    tracks: [],
    createdAt: Date.now(),
    updatedAt: Date.now()
  }
])
</script>
