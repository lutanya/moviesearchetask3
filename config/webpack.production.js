const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",

  plugins: [
    new CleanWebpackPlugin(),

    new UglifyJSPlugin(),
  ]
};