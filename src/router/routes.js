import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Detail from "@/pages/Detail";
import AddCartSuccess from "@/pages/AddCartSuccess";
import ShopCart from "@/pages/ShopCart";

export default [
  {
    path: "/home",
    component: Home,
    meta: { show: true },
  },
  {
    path: "/detail/:skuid",
    component: Detail,
    meta: { show: true },
  },
  {
    path: "/login",
    component: Login,
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
    path: "/shopcart",
    name: "shopcart",
    component: ShopCart,
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
