const webpack = require("webpack");
const { merge } = require("webpack-merge");
const path = require("path");
const commonConfig = require("./webpack.common");
const { distPath } = require("./path");

module.exports = merge(commonConfig, {
  // Enable sourcemaps for debugging webpack's output.
  mode: "development",
  devtool: "source-map",
  devServer: {
    port: 9020,
    compress: true,
    static: {
      directory: distPath,
    },
  },
});
