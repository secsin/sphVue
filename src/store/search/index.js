import { reqgetSearchInfo } from "@/api";
const state = {
  searchList: {},
};
const mutations = {
  GETSEARCHLIST(state, searchList) {
    state.searchList = searchList;
  },
};
const actions = {
  async getSearchList({ commit }, params = {}) {
    let result = await reqgetSearchInfo(params);
    // console.log(result);
    if (result.code == 200) {
      commit("GETSEARCHLIST", result.data);
    }
  },
};
// 计算属性，为了简化数据
const getters = {
  goodsList(state) {
    // 假如没有网是空数组
    return state.searchList.goodsList || [];
  },
  trademarkList(state) {
    return state.searchList.trademarkList;
  },
  attrsList(state) {
    return state.searchList.attrsList;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
