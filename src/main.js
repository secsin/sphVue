import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";
// 三级联动组件
import TypeNav from "@/components/TypeNav";
import Carousel from "@/components/Carousel";
import Pagination from "@/components/Pagination";
import { Button, MessageBox } from "element-ui";
import "@/mock/mockServe";
import "swiper/css/swiper.css";
import * as API from "@/api";
import VueLazyload from "vue-lazyload";
import cartoon from "@/assets/cartoon.jpg";
import "@/plugins/validate";

Vue.component(Carousel.name, Carousel);
Vue.component(TypeNav.name, TypeNav);
Vue.component(Pagination.name, Pagination);
Vue.component(Button.name, Button);
//ElementUI注册组件的时候，还有一种写法，挂在原型上
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.config.productionTip = false;
Vue.use(VueLazyload, {
  loading: cartoon,
});

new Vue({
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  router,
  store,
}).$mount("#app");
