<template>
  <div class="flex flex-col min-h-screen">
    <!-- Edit Form Section -->
    <div class="flex-grow container mx-auto p-4 space-y-4">
      <h1 class="text-2xl font-bold mb-6">Edit Company Profile</h1>
      <div>
        <label for="company-name" class="block text-sm font-medium text-gray-700">Company Name</label>
         <input type="text" id="company-name" :value="company.companyName" @input="updateField('companyName', $event.target.value)" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required>

      </div>
      <div>
        <label for="location" class="block text-sm font-medium text-gray-700">Location</label>
        <input type="text" id="location"   :value="company.location" @input="updateField('location', $event.target.value)" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required>
      </div>
      <div>
        <label for="contact" class="block text-sm font-medium text-gray-700">Contact</label>
        <input type="text" id="contact"   :value="company.contact" @input="updateField('contact', $event.target.value)" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required>
      </div>
      <div>
        <label for="notes" class="block text-sm font-medium text-gray-700">Notes</label>
        <textarea id="notes"  :value="company.notes" @input="updateField('notes', $event.target.value)" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" rows="4"></textarea>
      </div>
      <div>
        <label for="photo" class="block text-sm font-medium text-gray-700">Photo</label>
        <input type="file" id="photo" @change="handleFileUpload" class="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600">
      </div>
    </div>

    <!-- Sticky Save Changes Button -->
    <div class="sticky bottom-0  w-full">
      <button type="submit" @click="saveChanges('companyName',company.companyName)" class="py-4 px-6 bg-blue-500 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 w-full">
        Save Changes
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { debounce } from 'lodash'; // Import debounce from Lodash
import { useCompanyService, useUpdateCompanyInfo, useMapper } from '@/composables/useCompanyService';

const route = useRoute();
const router = useRouter();
const { companies, errorMessage, listCompanies } = useCompanyService();
const { saveCompanyData } = useUpdateCompanyInfo();

let company = ref({
  id: 0,
  companyName: '',
  location: '',
  contact: '',
  notes: '',
  category: '',
  website: '',
  priority: 0,
  assigned: ''
});

// Create a debounced save function
const debouncedSave = debounce(async (column, value) => {
  
  const { mappedLetter } = useMapper(column);
  
  console.log('Getting Mapped Letter:', mappedLetter);


  const cellUpdateData = {
    "column": column,
    "columnLetter": mappedLetter, // Assuming you have a way to determine this based on column
    "rowNumber": parseInt(route.params.id),
    "value": value
  };
  
  const result = await saveCompanyData(cellUpdateData);
  
  if (result.success) {
    console.log('Saved company data:', company.value);
  }
}, 500); // 500 ms delay

// Update to trigger debounced function on input
function updateField(field, value) {
  company.value[field] = value;
  debouncedSave(field, value);
}

function handleFileUpload(event) {
  const file = event.target.files[0];
  console.log('Uploading file:', file.name);
  // Add your file upload logic here
}

watch(companies, (newCompanies) => {
  const id = parseInt(route.params.id);
  const data = newCompanies.find(c => c.id === id);
  if (data) {
    company.value = { ...data };
  }
}, { immediate: true });

onMounted(async () => {
  await listCompanies();
});
</script>

