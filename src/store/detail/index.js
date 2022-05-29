import { reqgetGoodsInfo, reqaddorUpdateShopCart } from "@/api/index";
import { getUUID } from "@/utils/uuid_token";
const state = {
  goodInfo: {},
  // 临时身份
  uuid_token: getUUID(),
};
let mutations = {
  GETGOODSINFO(state, goodInfo) {
    state.goodInfo = goodInfo;
  },
};
let actions = {
  async getGoodsInfo({ commit }, skuId) {
    let result = await reqgetGoodsInfo(skuId);
    //判断服务器返回的状态是200->成功
    if (result.code == 200) {
      //提交mutation存储服务器数据
      commit("GETGOODSINFO", result.data);
    }
  },
  async addorUpdateShopCart({ commit }, { skuId, skuNum }) {
    let result = await reqaddorUpdateShopCart(skuId, skuNum);
    if (result.code == 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("fail"));
    }
  },
};
const getters = {
  categoryView(state) {
    return state.goodInfo.categoryView || {};
  },
  skuInfo(state) {
    return state.goodInfo.skuInfo || {};
  },
  spuSaleAttrList(state) {
    return state.goodInfo.spuSaleAttrList || [];
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
