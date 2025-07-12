<template>
  <button class="file-card" @click="showDialog">
    <div class="file-card__icon">
      <img :src="icon" alt="" />
    </div>
    <div class="file-card__name">
      {{ file.name }}
    </div>
  </button>
  <dialog ref="dialog" closedby="any">
    <div class="file-dialog">
      <div class="file-dialog-close">
        <button @click="closeDialog" class="close-button" aria-label="Close">
          &times;
        </button>
      </div>
      <FileDialogContent :fid="file.id" v-if="openedModal" />

      <div v-if="!dataStore.fileData[file.id]">Loading</div>

      <a :href="url" target="_blank"> Go to file </a>
    </div>
  </dialog>
</template>

<script setup lang="ts">
import type { Item } from "../types/files";

import lower from "../components/icons/lower.svg";
import upper from "../components/icons/upper.svg";
import { ref } from "vue";

import { useDataStore } from "../store/useDataStore";
import FileDialogContent from "./FileDialogContent.vue";

interface Props {
  file: Item;
}

const dataStore = useDataStore();

const props = defineProps<Props>();

const openedModal = ref(false);

const url = `https://docs.google.com/spreadsheets/d/${props.file.id}/edit?gid=0#gid=0`;

const icon = props.file.name.toLowerCase().includes("lower") ? lower : upper;

const dialog = ref<HTMLDialogElement | null>(null);

const showDialog = () => {
  if (dialog.value) {
    dialog.value.showModal();

    openedModal.value = true;
  }
};

const closeDialog = () => {
  if (dialog.value) {
    dialog.value.close();

    openedModal.value = false;
  }
};
</script>

<style scoped>
.file-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 120px;
  height: 140px;
  padding: 12px;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  text-align: center;
  user-select: none;

  border: none;
  outline: none;
  transition: transform 0.1s ease, box-shadow 0.1s ease;

  text-decoration: none;
  color: inherit;
}

.file-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

.file-card:focus-visible {
  outline: 2px solid #3399ff;
  outline-offset: 2px;
}

.file-card__icon {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  color: #4a4a4a;
}

.file-card__icon img {
  width: 64px;
  height: 64px;
  stroke: #4a4a4a;
}

.file-card__name {
  margin-top: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}

dialog {
  border: none;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 90%;
  width: fit-content;
  background-color: #fff;
  color: #333;
}

dialog::backdrop {
  background-color: rgba(0, 0, 0, 0.4);
}

.file-dialog {
  padding: 0.5rem 2rem;
}

.file-dialog-close {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
}

.close-button {
  background-color: #eee;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  font-size: 1.25rem;
  line-height: 1;
  text-align: center;
  cursor: pointer;
  color: #333;
  transition: background-color 0.2s ease;
}

.close-button:hover {
  background-color: #ddd;
}

.close-button:focus {
  outline: 2px solid #4a90e2;
  outline-offset: 2px;
}
</style>
