import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import GmapVue from "gmap-vue";

const load = {
  libraries: "places",
};

load.client = "gme-my-gmap-client";
Vue.use(GmapVue, { load });

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
