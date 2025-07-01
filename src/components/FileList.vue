<template>
  <h2>Select a workout</h2>
  <div class="file-list">
    <ul>
      <li v-for="file in files" :key="file.id">
        <File :file="file" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { Item } from "../types/files";

import File from "./File.vue";

interface Props {
  files: Array<Item>;
}

const props = defineProps<Props>();
</script>

<style scoped>
.file-list {
  padding: 10px;
}

.file-list ul {
  margin: 0;
  padding: 0;
  display: flex;
}

.file-list li {
  list-style: none;
  padding: 20px;
}
</style>
