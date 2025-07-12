import { defineStore } from "pinia";
import type { FileData, Files } from "../types/files";

const BASE_URL = "https://lambent-sunburst-2fde44.netlify.app";

const FILE_STRUCTURE_URL = `${BASE_URL}/.netlify/functions/getStructure`;

const FILE_DATA_URL = `${BASE_URL}/.netlify/functions/readFile?id=`;

export const useDataStore = defineStore("data", {
  state: () => ({
    fileTree: {} as Files,
    loaded: false,
    loading: false,
    selectedFolder: null as string | null,
    fileData: {} as Record<string, FileData>,
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
    async loadFileData(fileId: string) {
      if (this.fileData[fileId]) {
        return; // Data already loaded
      }

      try {
        const response = await fetch(`${FILE_DATA_URL}${fileId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: FileData = await response.json();
        this.fileData[fileId] = data;
      } catch (error) {
        console.error("Error fetching file data:", error);
      }
    },
    async loadFiles() {
      if (this.loaded) {
        return;
      }
      this.loading = true;
      try {
        const response = await fetch(FILE_STRUCTURE_URL);
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
