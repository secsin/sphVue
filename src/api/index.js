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
