<template>
  <h2>Select a training block</h2>
  <div class="folder-list">
    <ul>
      <li v-for="folder in orderedFolders" :key="folder.id">
        <Folder :folder="folder" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { FilesClass } from "../types/files";
import Folder from "./Folder.vue";

interface Props {
  folders: Array<FilesClass>;
}

const props = defineProps<Props>();

const orderedFolders = computed(() => {
  // Sort folders by name
  return props.folders.sort(
    (a, b) => new Date(b.name).getTime() - new Date(a.name).getTime()
  );
});
</script>

<style scoped>
.folder-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
@media (max-width: 768px) {
  h2 {
    padding: 0 20px;
  }
}
</style>
