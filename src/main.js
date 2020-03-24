import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import gtris from "@gtris/vue";
import "@gtris/vue/dist/gtris3.css";

import "@/assets/scss/style.scss";

Vue.config.productionTip = false;

Vue.use(gtris);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
