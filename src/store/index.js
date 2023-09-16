import { defineStore } from 'pinia';

export const useDarkModeStore = defineStore({
  id: 'darkMode',
  state: () => ({
    isDarkMode: false
  }),
  actions: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    }
  },
  getters: {
    getIsDarkMode: (state) => state.isDarkMode
  }
});