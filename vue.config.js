const { defineConfig } = require("@vue/cli-service");
// 头部引入
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

configureWebpack: (config) => {
  const plugins = [];
  plugins.push(new NodePolyfillPlugin());
};
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, // 关闭eslint检查
  devServer: {
    proxy: {
      "/api": {
        target: "http://gmall-h5-api.atguigu.cn",
        // pathRewrite: {"^/api" : ""}
      },
    },
  },
});
