<template>
  <div>
    <!-- Sticky Search Box -->
    <div class="sticky top-0 bg-blue-200 p-4 z-10">
      <div class="container mx-auto">
        <div class="flex items-center space-x-2">
          <input type="text" placeholder="Search..." class="flex-grow py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <button class="p-2 bg-blue-500 text-white rounded">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- List -->
    <div class="bg-gray-100 py-4">
      <div class="container mx-auto">
        <!-- Replace with v-for for actual data -->
        <div class="bg-white mx-2  p-4 rounded-md shadow mb-4" v-for="item in items" :key="item.id">
          <h3 class="text-xl font-semibold">{{ item.title }}</h3>
          <p class="text-gray-700">{{ item.description }}</p>
          <p class="text-gray-500">{{ item.location }}</p>
          <div class="flex justify-between items-center mt-4">
            <a href="#" class="text-blue-500 hover:underline">Visit Website</a>
            <button class="flex items-center p-2 bg-gray-200 text-gray-700 rounded" @click="navigateToEdit(item.id)">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              Edit
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// import { useUserStore } from '@/stores/useUserStore';
// //import { storeToRefs } from 'pinia';

// const userStore = useUserStore();
// const { name, email } = storeToRefs(userStore);

// const updateUser = (name, email) => {
//   userStore.updateUser(name, email);
// };

const items = ref([
  // Sample data, replace or fetch from an API
  { id: 1, title: 'Item 1', description: 'Description for Item 1', location: 'Location 1', link: '#' },
  { id: 2, title: 'Item 2', description: 'Description for Item 2', location: 'Location 2', link: '#' },
  { id: 3, title: 'Item 3', description: 'Description for Item 3', location: 'Location 3', link: '#' },
  { id: 4, title: 'Item 4', description: 'Description for Item 4', location: 'Location 4', link: '#' },
  { id: 5, title: 'Item 5', description: 'Description for Item 5', location: 'Location 5', link: '#' },
  { id: 6, title: 'Item 6', description: 'Description for Item 6', location: 'Location 6', link: '#' },
  { id: 7, title: 'Item 7', description: 'Description for Item 7', location: 'Location 7', link: '#'},
  // Add more items as needed
])

const router = useRouter()

const navigateToEdit = (id) => {
  router.push(`/edit/${id}`)
}

</script>



