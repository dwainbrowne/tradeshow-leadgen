<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header -->
    <header class="bg-blue-500 text-white p-4">
      <div class="container mx-auto flex justify-between items-center">
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
// If you need any JavaScript, it can be added here.
</script>

<style>
/* Additional styles if needed */
</style>
