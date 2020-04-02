import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import gtris from "@gtris/vue";
import "@gtris/vue/dist/gtris3.css";
import "@/assets/scss/style.scss";

import "prismjs";
import "prismjs/themes/prism-coy.css";
import VuePrismEditor from "vue-prism-editor";
import "vue-prism-editor/dist/VuePrismEditor.css";
import gtPanel from "@/components/common/Panel.vue";

Vue.config.productionTip = false;

Vue.use(gtris);
Vue.component("prism-editor", VuePrismEditor);
Vue.component("gt-panel", gtPanel);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
