<template>
  <a :href="url" target="_blank" class="file-card">
    <div class="file-card__icon">
      <img :src="icon" alt="" />
    </div>
    <div class="file-card__name">
      {{ file.name }}
    </div>
  </a>
</template>

<script setup lang="ts">
import type { Item } from "../types/files";

import lower from "../components/icons/lower.svg";
import upper from "../components/icons/upper.svg";

interface Props {
  file: Item;
}

const props = defineProps<Props>();

const url = `https://docs.google.com/spreadsheets/d/${props.file.id}/edit?gid=0#gid=0`;

const icon = props.file.name.toLowerCase().includes("lower") ? lower : upper;
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
</style>
