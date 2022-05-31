const { defineConfig } = require("@vue/cli-service");
// 头部引入
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = defineConfig({
  configureWebpack: (config) => {
    const plugins = [];
    plugins.push(new NodePolyfillPlugin());
  },
  transpileDependencies: true,
  lintOnSave: false, // 关闭eslint检查
  productionSourceMap: false,
  devServer: {
    proxy: {
      "/api": {
        target: "http://gmall-h5-api.atguigu.cn",
        // pathRewrite: {"^/api" : ""}
      },
    },
  },
});
