<template>
  <div>
    <table>
      <thead>
        <tr>
          <th v-for="(value, key) in tableRowHeader" :key="key">{{ value }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in tableRows" :key="index">
          <template v-for="(value, key) in row" :key="key">
            <th v-if="key === 0" scope="row">{{ value }}</th>
            <td v-else>{{ value }}</td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import type { FileData } from "../types/files";

interface Props {
  data: FileData;
}

const props = defineProps<Props>();

const tableRowHeader = props.data.data[0] || {};

const tableRows = props.data.data.slice(1) || [];
</script>

<style scoped>
table {
  border-spacing: 0;
}

td,
th {
  padding: 0.5rem;
  padding-left: 0;
}
</style>
