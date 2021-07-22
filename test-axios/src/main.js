import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios"; // import axios
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueAxios from "vue-axios";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
//call axios
Vue.use(VueAxios, axios);

// call url dan header axios
axios.defaults.baseURL = "https://oryx.thunderlab.id/";
// axios.defaults.baseURL = "http://localhost:8000/api/";
axios.defaults.headers.common["Content-Type"] = "application/json";
if (localStorage.getItem("Authorization")) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("Authorization");
}

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
