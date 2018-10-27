const webpack = require("webpack");
const path = require("path");

// Workbox
const WorkboxPlugin = require("workbox-webpack-plugin");
// Brotli
const BrotliPlugin = require("brotli-webpack-plugin");
// GZip
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
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
    new webpack.optimize.AggressiveMergingPlugin(),
    new BrotliPlugin(),
    new CompressionPlugin(),
    new WorkboxPlugin({
      cacheId: "hugoma",
      swDest: path.join("dist", "sw.js"),
      globDirectory: "dist",
      globPatterns: ["index.html", "404.html", "**/*.{css,png,gif,jpg,svg,js,ico,json}"],
      globStrict: false,
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [{
        urlPattern: /\.(?:html)$/,
        handler: "networkFirst",
      },
      {
        urlPattern: /\.(?:css|png|gif|jpg|svg|xml|js|ico|json)$/,
        handler: "staleWhileRevalidate",
      },
      {
        urlPattern: new RegExp("https://twemoji.maxcdn.com"),
        handler: "staleWhileRevalidate"
      },
      {
        urlPattern: new RegExp("https://i.imgur.com"),
        handler: "staleWhileRevalidate"
      },
      {
        urlPattern: new RegExp("https://www.google-analytics.com"),
        handler: "staleWhileRevalidate"
      },
      {
        urlPattern: new RegExp("https://cdn.onesignal.com"),
        handler: "staleWhileRevalidate"
      }
      ]
    })
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
