<template>
  <Suspense>
    <ExplorerView />
    <template #fallback>
      <Splashscreen />
    </template>
  </Suspense>
</template>

<script setup lang="ts">
import ExplorerView from "./views/ExplorerView.vue";

import Splashscreen from "./components/Splashscreen.vue";
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Montserrat", sans-serif;
}

body {
  font-family: "Inter", sans-serif;
}
</style>
