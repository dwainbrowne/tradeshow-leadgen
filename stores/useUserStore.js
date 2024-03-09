// stores/useUserStore.js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  // state
  state: () => ({
    name: 'John Doe',
    email: 'john@example.com',
  }),

  // actions
  actions: {
    updateUser(name, email) {
      this.name = name;
      this.email = email;
    },
  },

  // getters
  getters: {
    fullName: (state) => `${state.name}`,
  },
});
