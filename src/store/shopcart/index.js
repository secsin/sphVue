import { reqCartList, reqDeleteCartById, reqUpdateCheckedById } from "@/api/index";
const state = {
  cartList: [],
};
let mutations = {
  GETCARTLIST(state, cartList) {
    state.cartList = cartList;
  },
};
let actions = {
  async getCartList({ commit }) {
    let result = await reqCartList();
    // console.log(result);
    if (result.code == 200) {
      commit("GETCARTLIST", result.data);
    }
  },
  async deleteCartListBySkuId({ commit }, skuId) {
    let result = await reqDeleteCartById(skuId);
    if (result.code == 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  async updateCheckedById({ commit }, { skuId, isChecked }) {
    let result = await reqUpdateCheckedById(skuId, isChecked);
    // console.log(result);
    if (result.code == 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  deleteAllCheckedCart({ dispatch, getters }) {
    // alert("sss");
    let promiseAll = [];
    getters.cartList.cartInfoList.forEach((item) => {
      let promise = item.isChecked == 1 ? dispatch("deleteCartListBySkuId", item.skuId) : "";
      promiseAll.push(promise);
    });
    // console.log(Promise.all(promiseAll));
    return Promise.all(promiseAll);
  },
  allUpdateChecked({ dispatch, state }, isChecked) {
    let promiseAll = [];
    state.cartList[0].cartInfoList.forEach((item) => {
      let promise = dispatch("updateCheckedById", { skuId: item.skuId, isChecked });
      promiseAll.push(promise);
    });
    return Promise.all(promiseAll);
  },
};
const getters = {
  cartList(state) {
    return state.cartList[0] || {};
  },
  // cartInfoList(state){
  //   return state.cartList[0]||{}
  // }
};

export default {
  state,
  mutations,
  actions,
  getters,
};
