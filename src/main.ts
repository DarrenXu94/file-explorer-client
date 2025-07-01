import { createApp } from "vue";
import { createPinia } from "pinia";

import "./style.css";

import App from "./App.vue";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);

// Mount the app to the DOM

app.mount("#app");
