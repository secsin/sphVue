import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
Vue.use(VueRouter);
import store from "@/store";

// 先把原型对象push方法备份一下
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
// 告诉原来的方法你往哪里跳，以及那些参数用location
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    // call||apply区别
    // 相同点：都可以调用函数一次，都可以篡改函数的上下文一次
    // 不同点：call与apply传递参数，call传递参数用逗号隔开，apply传递数组
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    // call||apply区别
    // 相同点：都可以调用函数一次，都可以篡改函数的上下文一次
    // 不同点：call与apply传递参数，call传递参数用逗号隔开，apply传递数组
    originReplace.call(this, location, resolve, reject);
  } else {
    originReplace.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};
let router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { y: 0 };
  },
});
// 全局守卫 跳转之前判断
router.beforeEach(async (to, from, next) => {
  // 放行函数
  // next();
  let token = store.state.user.token;
  // 用户信息
  let name = store.state.user.userInfo.name;
  if (token) {
    // 已登录不能去登录页
    if (to.path == "/login" || to.path == "/register") {
      next("/home");
    } else {
      if (name) {
        next();
      } else {
        try {
          await store.dispatch("userInfo");
          next();
        } catch (error) {
          // token过期
          await store.dispatch("logout");
          next("/login");
        }
      }
    }
  } else {
    // 未登录判断
    let toPath = to.path;
    if (toPath.indexOf("/trade") != -1 || toPath.indexOf("/pay") != -1 || toPath.indexOf("/center") != -1) {
      next("/login?redirect=" + toPath);
    } else {
      next();
    }
  }
});

export default router;
