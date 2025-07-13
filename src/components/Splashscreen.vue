<template>
  <div class="splash-screen">
    <div class="splash-logo">
      <Spinner />
    </div>
    <div class="splash-text">Loading app, please wait...</div>
  </div>
</template>

<script setup lang="ts">
import Spinner from "./Spinner.vue";

// No props needed for basic version
</script>

<style scoped>
.splash-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #ffffff;
  color: #333;
  font-family: sans-serif;
  text-align: center;
  transition: opacity 0.3s ease;
}

.splash-text {
  font-size: 18px;
  opacity: 0.8;
}
</style>
