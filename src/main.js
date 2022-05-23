import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";
// 三级联动组件
import TypeNav from "@/components/TypeNav";
import Carousel from "@/components/Carousel";
import "@/mock/mockServe";
import "swiper/css/swiper.css";

Vue.component(Carousel.name, Carousel);
Vue.component(TypeNav.name, TypeNav);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
