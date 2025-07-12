<template>
  <div v-if="dataStore.fileData[props.fid]">
    <FileDialogTable :data="dataStore.fileData[props.fid]" />
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from "../store/useDataStore";

import FileDialogTable from "./FileDialogTable.vue";

const dataStore = useDataStore();

interface Props {
  fid: string;
}

const props = defineProps<Props>();

await dataStore.loadFileData(props.fid);
</script>

<style scoped></style>
