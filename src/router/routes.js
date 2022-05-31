import Search from "@/pages/Search";
import Register from "@/pages/Register";
import AddCartSuccess from "@/pages/AddCartSuccess";
import ShopCart from "@/pages/ShopCart";
import Trade from "@/pages/Trade";
import Pay from "@/pages/Pay";
import PaySuccess from "@/pages/PaySuccess";
import Center from "@/pages/Center";
import MyOrder from "@/pages/Center/myOrder";
import GroupOrder from "@/pages/Center/groupOrder";

export default [
  {
    path: "/home",
    // 路由懒加载
    component: () => import("@/pages/Home"),
    meta: { show: true },
  },
  {
    path: "/detail/:skuid",
    component: () => import("@/pages/Detail"),
    meta: { show: true },
  },
  {
    path: "/login",
    component: () => import("@/pages/Login"),
    meta: { show: false },
  },
  {
    path: "/register",
    component: Register,
    meta: { show: false },
  },
  {
    path: "/addcartsuccess",
    name: "addcartsuccess",
    component: AddCartSuccess,
    meta: { show: true },
  },
  {
    path: "/center",
    component: Center,
    meta: { show: true },
    children: [
      {
        // 不用/
        path: "myorder",
        component: MyOrder,
      },
      {
        path: "grouporder",
        component: GroupOrder,
      },
      {
        path: "/center",
        redirect: "/center/myorder",
      },
    ],
  },
  {
    path: "/shopcart",
    name: "shopcart",
    component: ShopCart,
    meta: { show: true },
  },
  {
    path: "/trade",
    component: Trade,
    meta: { show: true },
    beforeEnter: (to, from, next) => {
      if (from.path == "/shopcart") {
        next();
      } else {
        next(false);
      }
    },
  },
  {
    path: "/pay",
    component: Pay,
    meta: { show: true },
    beforeEnter: (to, from, next) => {
      if (from.path == "/trade") {
        next();
      } else {
        next(false);
      }
    },
  },
  {
    path: "/paysuccess",
    component: PaySuccess,
    meta: { show: true },
  },
  {
    path: "/search/:keyword?", // ?代表可传可不传
    component: Search,
    meta: { show: true },
    name: "search",
    // props: true  // 布尔值写法只能传params属性
    // props: {a:1, b:2}  // 对象写法, 额外给路由组件传递一些props
    // 函数写法：可以让params参数，query参数，通过props参数传递给路由组件
    // props: ($route) => ({ keyword: $route.params.keyword, k: $route.query.k }),
  },
  {
    path: "*",
    redirect: "/home",
  },
];
