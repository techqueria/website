const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "development",
  module: {
    rules: [{
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "url-loader"
    },
    {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-c9])?$/,
      loader: "url-loader"
    },
    {
      test: /\.js?$/,
      loader: "babel-loader",
      exclude: /node_modules/,
      query: {
        cacheDirectory: true
      }
    },
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    },
    {
      test: /\.(gif|png|jpe?g|svg)$/i,
      use: [
        "file-loader",
        {
          loader: "image-webpack-loader"
        }
      ]
    }
    ]
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.ProvidePlugin({
      fetch: "imports-loader?this=>global!exports?global.fetch!whatwg-fetch"
    }),
    new webpack.optimize.AggressiveMergingPlugin()
  ],
  context: path.join(__dirname, "src"),
  entry: {
    app: ["./js/app"]
  },
  output: {
    path: path.join(__dirname, "dist/assets/js"),
    publicPath: "/dist/assets/js/",
    filename: "[name].js"
  }
};
