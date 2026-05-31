<script setup lang="ts">
import { onMounted } from 'vue'
import MainLayout from '@/layouts/MainLayout.vue'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()

// Initialize auth from localStorage on app mount
onMounted(() => {
  authStore.initializeAuth()
})
</script>

<template>
  <MainLayout />
</template>

<style>
/* Global styles */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-track {
  background: #0a0a0a;
}
::-webkit-scrollbar-thumb {
  background: #262626;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #404040;
}
</style>
