<template>
  <h2>Select a training block</h2>
  <div class="folder-list" @scroll="handleScroll">
    <ul>
      <li v-for="folder in orderedFolders" :key="folder.id">
        <Folder :folder="folder" />
      </li>
    </ul>
  </div>
  <div class="scroll-more" v-show="!isAtBottom">
    <span class="arrow">&#x25BC;</span>
    <!-- Downward arrow -->
    <span class="text">Scroll for more</span>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
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

const isAtBottom = ref(false);

const handleScroll = (event: Event) => {
  const target = event.target as HTMLElement;
  if (target.scrollTop + target.clientHeight >= target.scrollHeight) {
    // Load more folders or perform an action when scrolled to the bottom
    isAtBottom.value = true;
  } else {
    isAtBottom.value = false;
  }
};
</script>

<style scoped>
.folder-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.scroll-more {
  display: none;
}

@media (max-width: 768px) {
  h2 {
    padding: 0 20px;
  }

  .folder-list {
    max-height: 30vh;
    overflow-y: auto;
  }

  .scroll-more {
    display: block;
    text-align: center;
    padding: 1rem;
    color: #555;
    font-size: 0.9rem;
    font-family: sans-serif;
    position: relative;
    animation: fadeIn 1s ease-out;
  }

  .scroll-more .arrow {
    display: block;
    font-size: 1rem;
    animation: bounce 1.5s infinite;
  }

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(5px);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>
