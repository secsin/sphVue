import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

// 先把原型对象push方法备份一下
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
// 告诉原来的方法你往哪里跳，以及那些参数用location
VueRouter.prototype.push = function(location, resolve, reject){
  if (resolve && reject) {
    // call||apply区别
    // 相同点：都可以调用函数一次，都可以篡改函数的上下文一次
    // 不同点：call与apply传递参数，call传递参数用逗号隔开，apply传递数组
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(this, location, ()=>{}, ()=>{})
  }
};
VueRouter.prototype.replace = function(location, resolve, reject){
  if (resolve && reject) {
    // call||apply区别
    // 相同点：都可以调用函数一次，都可以篡改函数的上下文一次
    // 不同点：call与apply传递参数，call传递参数用逗号隔开，apply传递数组
    originReplace.call(this, location, resolve, reject)
  } else {
    originReplace.call(this, location, ()=>{}, ()=>{})
  }
};
export default new VueRouter({
  routes:[
    {
      path: "/home",
      component: Home,
      meta: {show:true}
    },
    {
      path: "/login",
      component: Login,
      meta: {show:false}
    },
    {
      path: "/register",
      component: Register,
      meta: {show:false}
    },
    {
      path: "/search/:keyword?",  // ?代表可传可不传
      component: Search,
      meta: {show:true},
      name: "search",
      // props: true  // 布尔值写法只能传params属性
      // props: {a:1, b:2}  // 对象写法, 额外给路由组件传递一些props
      // 函数写法：可以让params参数，query参数，通过props参数传递给路由组件
      props: ($route)=>({keyword:$route.params.keyword,k:$route.query.k})
    },
    {
      path: "*",
      redirect: "/home"
    },
  ]
})