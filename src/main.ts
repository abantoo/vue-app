import { createApp } from "vue";
import "./css/tailwind.css";
import App from "./Views/App.vue";
import { createPinia } from "pinia";
import router from "./routes";
import "flowbite";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"

const pinia = createPinia();
const app = createApp(App);
pinia.use(piniaPluginPersistedstate);

app.use(router).use(pinia).mount("#app");