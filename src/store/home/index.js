import { reqCategory, reqgetBannerList, reqgetFloorList } from "@/api";
const state = {
  category: [],
  bannerList: [],
  floorList: [],
};
let mutations = {
  GETCATEGORY(state, category) {
    state.category = category;
  },
  GETBANNERLIST(state, bannerList) {
    state.bannerList = bannerList;
    // console.log('mutation修改数据')
  },
  GETFLOORLIST(state, floorList) {
    state.floorList = floorList;
  },
};
let actions = {
  //商品分类的actions
  //actions地盘:可不可以书写异步语句
  async getCategory({ commit, state, dispatch }) {
    //获取服务器的数据,存储在vuex仓库中
    //reqCategory函数执行,返回的是Promise对象【pending、成功、失败】
    //await 等待成功的结果
    let result = await reqCategory();
    //判断服务器返回的状态是200->成功
    if (result.code == 200) {
      //提交mutation存储服务器数据
      commit("GETCATEGORY", result.data);
    }
  },
  async getBannerList({ commit }) {
    let result = await reqgetBannerList();
    //判断服务器返回的状态是200->成功
    if (result.code == 200) {
      //提交mutation存储服务器数据
      commit("GETBANNERLIST", result.data);
    }
  },
  async getFloorList({ commit }) {
    let result = await reqgetFloorList();
    //判断服务器返回的状态是200->成功
    if (result.code == 200) {
      //提交mutation存储服务器数据
      commit("GETFLOORLIST", result.data);
    }
  },
};
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
