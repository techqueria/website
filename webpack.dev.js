const path = require("path");

module.exports = {
  mode: "development",
  module: {
    rules: [{
      test: /\.js?$/,
      loader: "babel-loader",
      exclude: /node_modules/,
      query: {
        cacheDirectory: true
      }
    }, ]
  },
  context: path.join(__dirname, "assets"),
  entry: {
    app: ["./assets/js/app"],
    join: ["./assets/js/join"],
  },
  output: {
    path: path.join(__dirname, "dist/assets/js"),
    filename: "[name].js"
  }
};
