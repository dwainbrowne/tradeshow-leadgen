<template>
  <div class="flex flex-col min-h-screen">
    <!-- Edit Form Section -->
    <div class="flex-grow container mx-auto p-4 space-y-4">
      <h1 class="text-2xl font-bold mb-6">Edit Company Profile</h1>
      <div>
        <label for="company-name" class="block text-sm font-medium text-gray-700">Company Name</label>
        <input type="text" id="company-name" v-model="company.companyName" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required>
      </div>
      <div>
        <label for="location" class="block text-sm font-medium text-gray-700">Location</label>
        <input type="text" id="location" v-model="company.location" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required>
      </div>
      <div>
        <label for="contact" class="block text-sm font-medium text-gray-700">Contact</label>
        <input type="text" id="contact" v-model="company.contact" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required>
      </div>
      <div>
        <label for="notes" class="block text-sm font-medium text-gray-700">Notes</label>
        <textarea id="notes" v-model="company.notes" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" rows="4"></textarea>
      </div>
      <div>
        <label for="photo" class="block text-sm font-medium text-gray-700">Photo</label>
        <input type="file" id="photo" @change="handleFileUpload" class="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600">
      </div>
    </div>

    <!-- Sticky Save Changes Button -->
    <div class="sticky bottom-0  w-full">
      <button type="submit" @click="saveChanges" class="py-4 px-6 bg-blue-500 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 w-full">
        Save Changes
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const { data, generateData } = useData();


const route = useRoute()
const router = useRouter()


//Get the first item in the data array and assign to company
//Generate  a fake company data manually
const company = ref(data[0] || {
  companyName: 'Company Name',
  location: 'Location',
  contact: 'Contact',
  notes: 'Notes'
})



function saveChanges() {
  // Implement your save logic here
  // For demonstration purposes, we'll log to the console and redirect
  console.log('Saved company data:', company.value)
  router.push('/') // Redirect to home after save
}

function handleFileUpload(event) {
  const file = event.target.files[0]
  // Handle the file upload logic here
  console.log('Uploading file:', file.name)
}
</script>

