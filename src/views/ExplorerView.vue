<template>
  <div class="explorer-container">
    <nav>
      <h1>Gym Records</h1>
    </nav>

    <div v-if="!dataStore.loading" class="explorer-view">
      <div class="folder-list-wrapper">
        <FolderList :folders="dataStore.fileTree.files" />
      </div>

      <div class="file-list-wrapper">
        <FileList :files="dataStore.getFilesFromSelectedFolder" />
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

@media (max-width: 768px) {
  .explorer-view {
    grid-template-areas:
      "folder-list-wrapper"
      "file-list-wrapper";
    grid-template-columns: 1fr;
  }
}
</style>
