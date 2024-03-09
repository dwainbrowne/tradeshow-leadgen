<template>
  <div class="container mx-auto p-4">
    <h1 class="text-xl font-bold mb-4">Edit Item</h1>
    <!-- Form for editing the item -->
    <!-- For demonstration, simply displaying the item ID -->
    <p>Editing item with ID: {{ $route.params.id }}</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>