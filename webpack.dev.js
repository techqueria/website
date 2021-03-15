const path = require("path");

module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          cacheDirectory: true
        }
      }
    ]
  },
  context: path.join(__dirname, "assets"),
  entry: {
    app: ["./js/app"],
    join: ["./js/join"],
    rsvp: ["./js/rsvp"],
    partner: ["./js/partner"],
    resume: ["./js/resume"],
    location: ["./js/location"]
  },
  output: {
    filename: path.join("assets", "js", "[name].js"),
    path: path.join(__dirname, "dist")
  }
};
