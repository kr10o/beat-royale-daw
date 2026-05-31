<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
    <!-- Register Container -->
    <div class="flex items-center justify-center px-4 py-20">
      <div class="w-full max-w-md">
        <!-- Card -->
        <div class="rounded-xl border border-pink-500/20 bg-black/30 p-8 backdrop-blur">
          <!-- Header -->
          <div class="mb-8 text-center">
            <h1 class="text-3xl font-bold text-white">Create Account</h1>
            <p class="mt-2 text-gray-400">Join Beat Royale and start creating</p>
          </div>

          <!-- Error Alert -->
          <div v-if="authStore.error" class="mb-6 rounded-lg border border-red-500/30 bg-red-500/10 p-4">
            <p class="text-sm text-red-400">{{ authStore.error }}</p>
          </div>

          <!-- Form -->
          <form @submit.prevent="handleRegister" class="space-y-5">
            <!-- Username Field -->
            <div>
              <label for="username" class="block text-sm font-medium text-gray-300">Username</label>
              <input
                id="username"
                v-model="username"
                type="text"
                placeholder="beatmaster"
                required
                class="mt-2 w-full rounded-lg border border-gray-700 bg-gray-900/50 px-4 py-3 text-white placeholder-gray-500 focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500"
              />
              <p class="mt-1 text-xs text-gray-500">At least 3 characters</p>
            </div>

            <!-- Email Field -->
            <div>
              <label for="email" class="block text-sm font-medium text-gray-300">Email Address</label>
              <input
                id="email"
                v-model="email"
                type="email"
                placeholder="you@example.com"
                required
                class="mt-2 w-full rounded-lg border border-gray-700 bg-gray-900/50 px-4 py-3 text-white placeholder-gray-500 focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500"
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
                class="mt-2 w-full rounded-lg border border-gray-700 bg-gray-900/50 px-4 py-3 text-white placeholder-gray-500 focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500"
              />
              <p class="mt-1 text-xs text-gray-500">Minimum 6 characters</p>
            </div>

            <!-- Confirm Password Field -->
            <div>
              <label for="confirmPassword" class="block text-sm font-medium text-gray-300"
                >Confirm Password</label
              >
              <input
                id="confirmPassword"
                v-model="confirmPassword"
                type="password"
                placeholder="••••••••"
                required
                class="mt-2 w-full rounded-lg border border-gray-700 bg-gray-900/50 px-4 py-3 text-white placeholder-gray-500 focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500"
              />
            </div>

            <!-- Terms Agreement -->
            <div class="flex items-start">
              <input
                id="terms"
                v-model="agreeToTerms"
                type="checkbox"
                required
                class="mt-1 h-4 w-4 rounded border-gray-700 bg-gray-900/50 text-pink-500 focus:ring-2 focus:ring-pink-500"
              />
              <label for="terms" class="ml-2 text-xs text-gray-400">
                I agree to the
                <a href="#" class="text-pink-400 transition hover:text-pink-300">Terms of Service</a>
                and
                <a href="#" class="text-pink-400 transition hover:text-pink-300">Privacy Policy</a>
              </label>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="authStore.isLoading"
              class="w-full rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 py-3 text-lg font-semibold text-white transition disabled:opacity-50 hover:from-pink-600 hover:to-purple-600 active:scale-95"
            >
              <span v-if="authStore.isLoading">Creating account...</span>
              <span v-else>Create Account</span>
            </button>
          </form>

          <!-- Divider -->
          <div class="my-6 flex items-center gap-3">
            <div class="flex-1 border-t border-gray-700"></div>
            <span class="text-sm text-gray-500">or</span>
            <div class="flex-1 border-t border-gray-700"></div>
          </div>

          <!-- Social Sign Up (Future) -->
          <div class="mb-6 grid grid-cols-2 gap-3">
            <button
              type="button"
              disabled
              class="flex items-center justify-center gap-2 rounded-lg border border-gray-700 bg-gray-900/50 py-2 text-sm text-gray-400 transition hover:bg-gray-800 disabled:opacity-50"
            >
              <span>G</span>
              <span class="text-xs">Google</span>
            </button>
            <button
              type="button"
              disabled
              class="flex items-center justify-center gap-2 rounded-lg border border-gray-700 bg-gray-900/50 py-2 text-sm text-gray-400 transition hover:bg-gray-800 disabled:opacity-50"
            >
              <span>f</span>
              <span class="text-xs">GitHub</span>
            </button>
          </div>

          <!-- Sign In Link -->
          <div class="text-center">
            <p class="text-gray-400">
              Already have an account?
              <RouterLink to="/login" class="font-semibold text-pink-400 transition hover:text-pink-300">
                Sign in
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

const username = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const agreeToTerms = ref(false)

onMounted(() => {
  // Redirect if already logged in
  if (authStore.isAuthenticated) {
    router.push('/editor')
  }
})

async function handleRegister() {
  authStore.clearError()

  if (!agreeToTerms.value) {
    authStore.error = 'Please agree to the terms and conditions'
    return
  }

  const success = await authStore.register(username.value, email.value, password.value, confirmPassword.value)
  if (success) {
    router.push('/editor')
  }
}
</script>

<style scoped></style>
