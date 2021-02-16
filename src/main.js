import { createApp } from "vue";
import App from "./App.vue";
import Store from "./store";
import Routes from "./routes";
import "./assets/index.css";

createApp(App).use(Store).use(Routes).mount("#app");
