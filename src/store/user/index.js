import { reqGetCode, reqUserRegister, reqUserLogin, reqUserInfo } from "@/api/index";
const state = {
  code: "",
  token: "",
  userInfo: {},
};
let mutations = {
  GETCODE(state, code) {
    state.code = code;
  },
  USERLOGIN(state, token) {
    state.token = token;
  },
  GETUSERINFO(state, userInfo) {
    state.userInfo = userInfo;
  },
};
let actions = {
  async getCode({ commit }, phone) {
    let result = await reqGetCode(phone);
    // console.log(result);
    if (result.code == 200) {
      commit("GETCODE", result.data);
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  // 注册
  async userRegister({ commit }, user) {
    let result = await reqUserRegister(user);
    // console.log(result);
    if (result.code == 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  // 登录
  async userLogin({ commit }, data) {
    let result = await reqUserLogin(data);
    // console.log(result);
    if (result.code == 200) {
      commit("USERLOGIN", result.data.token);
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  // 获取用户信息
  async userInfo({ commit }, data) {
    let result = await reqUserInfo();
    // console.log(result);
    if (result.code == 200) {
      commit("GETUSERINFO", result.data);
      return "ok";
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
