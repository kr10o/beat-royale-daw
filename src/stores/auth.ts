import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface User {
  id: string
  username: string
  email: string
  createdAt: Date
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  const isAuthenticated = computed(() => !!user.value)

  // Mock localStorage keys
  const STORAGE_KEY = 'beat-royale-user'
  const STORAGE_SESSIONS = 'beat-royale-sessions'

  // Initialize auth from localStorage
  function initializeAuth() {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        user.value = JSON.parse(stored)
      } catch (e) {
        console.error('Failed to parse stored user:', e)
        localStorage.removeItem(STORAGE_KEY)
      }
    }
  }

  // Mock login (in production, this would call a backend API)
  async function login(email: string, password: string): Promise<boolean> {
    isLoading.value = true
    error.value = null

    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 800))

      // Mock validation (in production, validate against backend)
      if (!email || !password) {
        throw new Error('Email and password are required')
      }

      if (password.length < 6) {
        throw new Error('Password must be at least 6 characters')
      }

      // Mock user creation
      const mockUser: User = {
        id: `user_${Date.now()}`,
        username: email.split('@')[0],
        email,
        createdAt: new Date()
      }

      user.value = mockUser
      localStorage.setItem(STORAGE_KEY, JSON.stringify(mockUser))

      return true
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Login failed'
      return false
    } finally {
      isLoading.value = false
    }
  }

  // Mock register (in production, this would call a backend API)
  async function register(
    username: string,
    email: string,
    password: string,
    confirmPassword: string
  ): Promise<boolean> {
    isLoading.value = true
    error.value = null

    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Validation
      if (!username || !email || !password || !confirmPassword) {
        throw new Error('All fields are required')
      }

      if (username.length < 3) {
        throw new Error('Username must be at least 3 characters')
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        throw new Error('Please enter a valid email address')
      }

      if (password.length < 6) {
        throw new Error('Password must be at least 6 characters')
      }

      if (password !== confirmPassword) {
        throw new Error('Passwords do not match')
      }

      // Check if user already exists (mock)
      const sessions = JSON.parse(localStorage.getItem(STORAGE_SESSIONS) || '[]')
      if (sessions.some((s: { email: string }) => s.email === email)) {
        throw new Error('Email already registered')
      }

      // Mock user creation
      const mockUser: User = {
        id: `user_${Date.now()}`,
        username,
        email,
        createdAt: new Date()
      }

      // Store session
      sessions.push({ email, username, id: mockUser.id })
      localStorage.setItem(STORAGE_SESSIONS, JSON.stringify(sessions))

      user.value = mockUser
      localStorage.setItem(STORAGE_KEY, JSON.stringify(mockUser))

      return true
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Registration failed'
      return false
    } finally {
      isLoading.value = false
    }
  }

  // Logout
  function logout() {
    user.value = null
    localStorage.removeItem(STORAGE_KEY)
    error.value = null
  }

  // Clear error
  function clearError() {
    error.value = null
  }

  return {
    user,
    isAuthenticated,
    isLoading,
    error,
    initializeAuth,
    login,
    register,
    logout,
    clearError
  }
})
