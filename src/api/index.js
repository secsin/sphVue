import requests from "./requests";
import mockRequests from "./mockAjax";
// axios发请求返回结果是个
export const reqCategory = () => {
  //箭头函数可以在程序任意地方使用,箭头函数返回即为服务器的数据
  //下面箭头函数返回值：返回的是什么? promise,即为返回服务器的数据
  //return关键字，千万别忘记书写，如果忘记书写，你在任意地方获取的都是undeinfed
  return requests({ method: "get", url: "/product/getBaseCategoryList" });
};

export const reqgetBannerList = () => mockRequests.get("/banner");
export const reqgetFloorList = () => mockRequests.get("/floor");
export const reqgetSearchInfo = (params) => requests({ method: "post", url: "/list", data: params });
export const reqgetGoodsInfo = (skuId) => requests({ method: "get", url: `/item/${skuId}` });
export const reqaddorUpdateShopCart = (skuId, skuNum) => requests({ method: "post", url: `/cart/addToCart/${skuId}/${skuNum}` });
export const reqCartList = () => requests({ method: "get", url: "/cart/cartList" });
export const reqDeleteCartById = (skuId) => requests({ method: "delete", url: `/cart/deleteCart/${skuId}` });
export const reqUpdateCheckedById = (skuId, isChecked) => requests({ method: "get", url: `/cart/checkCart/${skuId}/${isChecked}` });
export const reqGetCode = (phone) => requests({ method: "get", url: `/user/passport/sendCode/${phone}` });
export const reqUserRegister = (data) => requests({ method: "post", url: "/user/passport/register", data });
export const reqUserLogin = (data) => requests({ method: "post", url: "/user/passport/login", data });
export const reqUserInfo = () => requests({ method: "get", url: "/user/passport/auth/getUserInfo" });
