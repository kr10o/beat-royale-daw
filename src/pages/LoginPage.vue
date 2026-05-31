<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
    <!-- Login Container -->
    <div class="flex items-center justify-center px-4 py-20">
      <div class="w-full max-w-md">
        <!-- Card -->
        <div class="rounded-xl border border-purple-500/20 bg-black/30 p-8 backdrop-blur">
          <!-- Header -->
          <div class="mb-8 text-center">
            <h1 class="text-3xl font-bold text-white">Welcome Back</h1>
            <p class="mt-2 text-gray-400">Sign in to your Beat Royale account</p>
          </div>

          <!-- Error Alert -->
          <div v-if="authStore.error" class="mb-6 rounded-lg border border-red-500/30 bg-red-500/10 p-4">
            <p class="text-sm text-red-400">{{ authStore.error }}</p>
          </div>

          <!-- Form -->
          <form @submit.prevent="handleLogin" class="space-y-6">
            <!-- Email Field -->
            <div>
              <label for="email" class="block text-sm font-medium text-gray-300">Email Address</label>
              <input
                id="email"
                v-model="email"
                type="email"
                placeholder="you@example.com"
                required
                class="mt-2 w-full rounded-lg border border-gray-700 bg-gray-900/50 px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
            </div>

            <!-- Password Field -->
            <div>
              <label for="password" class="block text-sm font-medium text-gray-300">Password</label>
              <input
                id="password"
                v-model="password"
                type="password"
                placeholder="••••••••"
                required
                class="mt-2 w-full rounded-lg border border-gray-700 bg-gray-900/50 px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
              <p class="mt-1 text-xs text-gray-500">Minimum 6 characters</p>
            </div>

            <!-- Remember Me -->
            <div class="flex items-center">
              <input
                id="remember"
                v-model="rememberMe"
                type="checkbox"
                class="h-4 w-4 rounded border-gray-700 bg-gray-900/50 text-purple-500 focus:ring-2 focus:ring-purple-500"
              />
              <label for="remember" class="ml-2 text-sm text-gray-400">Remember me</label>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="authStore.isLoading"
              class="w-full rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 py-3 text-lg font-semibold text-white transition disabled:opacity-50 hover:from-purple-600 hover:to-pink-600 active:scale-95"
            >
              <span v-if="authStore.isLoading">Signing in...</span>
              <span v-else>Sign In</span>
            </button>
          </form>

          <!-- Divider -->
          <div class="my-6 flex items-center gap-3">
            <div class="flex-1 border-t border-gray-700"></div>
            <span class="text-sm text-gray-500">or</span>
            <div class="flex-1 border-t border-gray-700"></div>
          </div>

          <!-- Demo Credentials -->
          <div class="mb-6 rounded-lg border border-purple-500/20 bg-purple-500/5 p-4">
            <p class="mb-3 text-xs font-semibold text-gray-400">Demo Credentials:</p>
            <div class="space-y-2 text-xs text-gray-400">
              <p><strong>Email:</strong> demo@example.com</p>
              <p><strong>Password:</strong> demo123</p>
            </div>
          </div>

          <!-- Sign Up Link -->
          <div class="text-center">
            <p class="text-gray-400">
              Don't have an account?
              <RouterLink to="/register" class="font-semibold text-purple-400 transition hover:text-purple-300">
                Sign up
              </RouterLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const email = ref('')
const password = ref('')
const rememberMe = ref(false)

onMounted(() => {
  // Redirect if already logged in
  if (authStore.isAuthenticated) {
    router.push('/editor')
  }

  // Pre-fill with demo credentials for convenience
  email.value = 'demo@example.com'
  password.value = 'demo123'
})

async function handleLogin() {
  authStore.clearError()

  const success = await authStore.login(email.value, password.value)
  if (success) {
    router.push('/editor')
  }
}
</script>

<style scoped></style>
