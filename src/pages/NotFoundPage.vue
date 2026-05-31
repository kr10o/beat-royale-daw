<template>
  <div class="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 px-4">
    <div class="text-center">
      <h1 class="mb-2 text-6xl font-bold text-white">404</h1>
      <p class="mb-6 text-2xl text-gray-300">Page not found</p>
      <p class="mb-8 text-gray-400">The page you're looking for doesn't exist or has been moved.</p>
      <RouterLink
        to="/"
        class="inline-block rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 font-semibold text-white transition hover:from-purple-600 hover:to-pink-600"
      >
        Back to Home
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
