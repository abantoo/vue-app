import { createApp } from "vue";
import "./css/tailwind.css";
import App from "./Views/App.vue";
import router from './router'
import 'flowbite';

const app = createApp(App)

app.use(router).mount("#app");
