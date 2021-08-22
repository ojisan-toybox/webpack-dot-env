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
    new HtmlWebpackPlugin(),
    env !== undefined
      ? new webpack.DefinePlugin({
          "process.env": JSON.stringify(env),
        })
      : new webpack.DefinePlugin({
          "process.env.HOGEHOGE": JSON.stringify(process.env.HOGE),
          "process.env.FUGAFUGA": JSON.stringify(process.env.FUGA),
        }),
  ],
};
