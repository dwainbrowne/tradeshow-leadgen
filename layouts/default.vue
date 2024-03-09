<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header -->
    <header class="bg-blue-500 text-white p-4">
      <div class="container mx-auto flex justify-between items-center">
         <!-- Conditional Back Button -->
        <div v-if="isNotIndexPage" @click="goBack" class="cursor-pointer mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </div>

        <!-- Logo and company name -->
        <a href="/" class="flex items-center">
          <img src="~/assets/images/dwain-unfinished-logo.jpg" alt="Logo" class="h-8 mr-2"> <!-- Update logo path -->
          <span class="text-lg font-bold">Dwain Unfinished</span> <!-- Update company name -->
        </a>
      </div>
    </header>

    <!-- Page content -->
    <main class="flex-grow container mx-auto px-4 py-2">
      <NuxtPage />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white p-4">
      <div class="container mx-auto text-center">
        <p>© 2024 Dwain Unfinished. All rights reserved.</p> <!-- Update year and company name -->
        <!-- Add more footer content here -->
      </div>
    </footer>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

// Determine if the current page is not the index page
const isNotIndexPage = computed(() => route.path !== '/')

// Function to navigate back
function goBack() {
  router.back()
}
</script>

