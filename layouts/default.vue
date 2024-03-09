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
    <main class="flex-grow container mx-auto ">
      <NuxtPage />
    </main>

    <!-- Footer -->
    <!-- Sticky Round Button -->
    <footer v-if="!route.path.includes('/edit/')" class="fixed bottom-8 left-0 right-0 mx-auto w-max">   
      <button @click="navigateToEdit" class="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full text-white shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        <!-- Plus Icon -->
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-8 h-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
        </svg>
      </button>

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

// Function to navigate to the edit/new contact screen
function navigateToEdit() {
  // Assuming '/edit/new' is the route to add a new contact.
  // Adjust the route as per your application's URL structure.
  router.push('/edit/new')
}
</script>

