<template>
  <div class="flex items-center justify-between rounded-t-lg bg-gray-900 px-4 py-2 border-b border-white/5">
    <div class="flex items-center gap-4">
      <div class="flex items-center gap-2">
        <div class="h-2 w-2 rounded-full bg-red-500 animate-pulse" v-if="isRecording"></div>
        <span class="text-xs font-mono text-gray-400">00:00:00</span>
      </div>
      <div class="h-4 w-px bg-gray-700"></div>
      <slot name="transport"></slot>
    </div>
    
    <div class="flex items-center gap-3">
      <button class="rounded bg-white/5 px-3 py-1 text-xs font-medium text-gray-300 hover:bg-white/10">
        Export
      </button>
      <button class="rounded bg-purple-500 px-3 py-1 text-xs font-medium text-white hover:bg-purple-600">
        Save
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  isRecording?: boolean
}>()
</script>
