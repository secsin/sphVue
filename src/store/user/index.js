import { reqGetCode, reqUserRegister, reqUserLogin, reqUserInfo, reqLogout } from "@/api/index";
import { setToken, getToken, removeToken } from "@/utils/token";
const state = {
  code: "",
  token: getToken(),
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
  CLEARTOKEN(state) {
    state.token = "";
    state.userInfo = {};
    removeToken();
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
      setToken(result.data.token);
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  // 获取用户信息
  async userInfo({ commit }) {
    let result = await reqUserInfo();
    // console.log(result);
    if (result.code == 200) {
      commit("GETUSERINFO", result.data);
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  // 退出登录
  async logout({ commit }) {
    let result = await reqLogout();
    // console.log(result);
    if (result.code == 200) {
      commit("CLEARTOKEN");
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
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
