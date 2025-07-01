<template>
  <div class="splash-screen">
    <div class="splash-logo">
      <div class="spinner"></div>
    </div>
    <div class="splash-text">Loading app, please wait...</div>
  </div>
</template>

<script setup>
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

.spinner {
  border: 4px solid #ccc;
  border-top: 4px solid #333;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  animation: spin 1s linear infinite;
  margin-bottom: 24px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
