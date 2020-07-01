const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackBar = require("webpackbar");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
const CircularDependencyPlugin = require("circular-dependency-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

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
    }),
    new WebpackBar({
      name: "my-react-project",
      color: "#61dafb"
    }),
    new FriendlyErrorsWebpackPlugin(),
    new CaseSensitivePathsPlugin(),
    new CircularDependencyPlugin({ 
      exclude: /node_modules/, 
      include: /src/, 
      failOnError: true, 
      allowAsyncCycles: false, 
      cwd: process.cwd(), 
    }),
    new CleanWebpackPlugin(),
  ],
};
