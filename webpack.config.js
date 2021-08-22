const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const dotenv = require("dotenv");

const env = dotenv.config().parsed;

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "build.js",
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
    env !== undefined
      ? new webpack.DefinePlugin({
          "process.env": JSON.stringify(env),
        })
      : new webpack.DefinePlugin({
          "process.env.HOGE": JSON.stringify(process.env.HOGE),
          "process.env.FUGA": JSON.stringify(process.env.FUGA),
        }),
  ],
};
