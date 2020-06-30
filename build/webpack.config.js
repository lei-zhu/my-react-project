const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: path.join(__dirname, "./../", "src/index.tsx")
  },
  output: {
    path: path.join(__dirname, "./../", "dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        // 匹配要解析的文件
        test: /\.ts(x?)$/,
        use: [
          {
            loader: "awesome-typescript-loader",
            options: {}
          }
        ]
      }
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "build/tpl/index.html"
    })
  ],
};
