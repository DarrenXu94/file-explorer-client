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
  flex-wrap: wrap;
}

.file-list li {
  list-style: none;
  padding: 20px;
}

@media (max-width: 768px) {
  h2 {
    padding: 0 20px;
  }

  .file-list ul {
    justify-content: center;
    gap: 20px;
  }

  .file-list li {
    padding: 0;
  }
}
</style>
