<template>
  <div class="explorer-container">
    <nav>
      <h1>Gym Records</h1>
    </nav>

    <div v-if="!dataStore.loading" class="explorer-view">
      <div class="folder-list-wrapper">
        <FolderList :folders="dataStore.fileTree.files" />
      </div>

      <div class="file-list-wrapper" v-if="dataStore.selectedFolder">
        <FileList :files="dataStore.getFilesFromSelectedFolder" />
        <div class="button-wrapper">
          <a class="button-link" :href="selectedUrl"
            >Go to folder {{ dataStore.getSelectedFolderName }}</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from "../store/useDataStore";

import FolderList from "../components/FolderList.vue";

import FileList from "../components/FileList.vue";

const dataStore = useDataStore();

await dataStore.loadFiles();

const selectedUrl = `https://drive.google.com/drive/u/0/folders/${dataStore.selectedFolder}`;
</script>

<style scoped>
.folder-list-wrapper {
  grid-area: folder-list-wrapper;
}

.file-list-wrapper {
  grid-area: file-list-wrapper;
}

nav {
  background-color: #f0f0f0;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.explorer-view {
  display: grid;
  grid-template-areas: "folder-list-wrapper file-list-wrapper";
  grid-template-columns: 1fr 3fr;
  column-gap: 50px;
  max-width: 1280px;
  margin: 0 auto;
}

.button-wrapper {
  padding: 10px 20px;
}

a.button-link {
  display: inline-block;
  padding: 0.5em 1em;
  background-color: #4a90e2;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
}

a.button-link:hover {
  background-color: #357ab8;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

a.button-link:active {
  background-color: #2d6396;
}

a.button-link:focus {
  outline: 2px solid #357ab8;
  outline-offset: 2px;
}

@media (max-width: 768px) {
  .explorer-view {
    grid-template-areas:
      "folder-list-wrapper"
      "file-list-wrapper";
    grid-template-columns: 1fr;
  }
}
</style>
