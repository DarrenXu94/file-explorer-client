import { defineStore } from "pinia";
import type { Files } from "../types/files";

const fetchingUrl =
  "https://lambent-sunburst-2fde44.netlify.app/.netlify/functions/getStructure";

export const useDataStore = defineStore("data", {
  state: () => ({
    fileTree: {} as Files,
    loaded: false,
    loading: false,
    selectedFolder: null as string | null,
  }),
  getters: {
    getFilesFromSelectedFolder: (state) => {
      if (!state.selectedFolder) {
        return [];
      }
      const folder = state.fileTree.files.find(
        (file) => file.id === state.selectedFolder
      );
      return folder ? folder.items : [];
    },
    getSelectedFolderName: (state) => {
      const folder = state.fileTree.files.find(
        (file) => file.id === state.selectedFolder
      );
      return folder ? folder.name : "Root";
    },
  },
  actions: {
    async loadFiles() {
      if (this.loaded) {
        return;
      }
      this.loading = true;
      try {
        const response = await fetch(fetchingUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        this.fileTree = data;
      } catch (error) {
        console.error("Error fetching file structure:", error);
      } finally {
        this.loaded = true;
        this.loading = false;
      }
    },
  },
});
