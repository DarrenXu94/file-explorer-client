<template>
  <button
    @click="selectFolder"
    class="folder-button"
    :class="{ active: dataStore.selectedFolder === props.folder.id }"
  >
    <img :src="folder" alt="" />

    <span>{{ props.folder.name }}</span>
  </button>
</template>

<script setup lang="ts">
import { useDataStore } from "../store/useDataStore";
import type { FilesClass } from "../types/files";

import folder from "../components/icons/folder.svg";

interface Props {
  folder: FilesClass;
}

const props = defineProps<Props>();
const dataStore = useDataStore();

const selectFolder = () => {
  dataStore.selectedFolder = props.folder.id;
  console.log("Selected folder:", props.folder.id);
};
</script>

<style scoped>
.folder-button {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  width: 100%;
  padding: 24px;
  background-color: white;
  border: none;
  cursor: pointer;
  border-bottom: 1px solid #ccc;
}
.folder-button:hover {
  background-color: #e0e0e0;
}

.folder-button.active {
  background-color: #f0f0f0;
  font-weight: bold;
}
</style>
