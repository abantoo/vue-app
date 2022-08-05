import { createApp } from "vue";
import "./css/tailwind.css";
import App from "./Views/App.vue";
import { createPinia } from "pinia";
import router from "./routes";
import "flowbite";
import { createPersistedStatePlugin } from "pinia-plugin-persistedstate-2";

const pinia = createPinia();
const app = createApp(App);
const installPersistedStatePlugin = createPersistedStatePlugin();
pinia.use((context) => installPersistedStatePlugin(context));

app.use(router).use(pinia).mount("#app");
