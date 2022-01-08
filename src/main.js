import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueLazyLoad from "vue3-lazyload";
import "./index.scss";

const app = createApp(App);

app.use(VueLazyLoad).use(router);

app.mount("#app");
