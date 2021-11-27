import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import quackDependencies from "./assets/plugins/globalSytlesheets";
import titleMixin from "./assets/mixins/titleMixin";

const appInstance = createApp(App);
appInstance.mixin(titleMixin);
appInstance.use(router);
appInstance.use(quackDependencies);
appInstance.mount('#app');
