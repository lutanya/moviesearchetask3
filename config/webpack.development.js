const path = require("path");

module.exports = {
  devtool: "cheap-inline-module-source-map",
  mode: "development",
  watch: true,

  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 9000,
    watchContentBase: true,
    progress: true,
    open: true
  }
};