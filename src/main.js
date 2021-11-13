import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import quackDependencies from "./assets/plugins/globalSytlesheets";

const appInstance = createApp(App)
appInstance.use(router);
appInstance.use(quackDependencies);
appInstance.mount('#app');
