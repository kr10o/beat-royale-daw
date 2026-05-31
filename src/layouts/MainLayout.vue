<template>
  <div class="min-h-screen bg-gray-900">
    <!-- Navigation Header -->
    <header class="border-b border-gray-800 bg-gray-950">
      <nav class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <RouterLink to="/" class="flex items-center gap-2">
          <span class="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            ♪ Beat Royale
          </span>
        </RouterLink>

        <div class="flex items-center gap-4">
          <template v-if="!authStore.isAuthenticated">
            <RouterLink
              to="/login"
              class="rounded-lg px-4 py-2 text-sm font-medium text-gray-300 transition hover:text-white hover:bg-gray-800"
            >
              Login
            </RouterLink>
            <RouterLink
              to="/register"
              class="rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 text-sm font-medium text-white transition hover:from-purple-600 hover:to-pink-600"
            >
              Sign Up
            </RouterLink>
          </template>

          <template v-else>
            <RouterLink
              to="/editor"
              class="rounded-lg px-4 py-2 text-sm font-medium text-gray-300 transition hover:text-white hover:bg-gray-800"
            >
              Editor
            </RouterLink>
            <div class="flex items-center gap-3 border-l border-gray-700 pl-4">
              <span class="text-sm text-gray-400">{{ authStore.user?.username }}</span>
              <button
                @click="handleLogout"
                class="rounded-lg px-3 py-2 text-sm font-medium text-gray-300 transition hover:text-white hover:bg-gray-800"
              >
                Logout
              </button>
            </div>
          </template>
        </div>
      </nav>
    </header>

    <!-- Page Content -->
    <main class="mx-auto max-w-7xl">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()

function handleLogout() {
  authStore.logout()
  router.push('/')
}
</script>

<style scoped>
/* Navigation link active state */
:deep(.router-link-active) {
  @apply text-white bg-gray-800;
}
</style>
