const webpack = require("webpack");
const path = require("path");

// Workbox
const WorkboxPlugin = require("workbox-webpack-plugin");
// Brotli
const BrotliPlugin = require("brotli-webpack-plugin");
// GZip
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  mode: "production",
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
      test: /\.(js|jsx)?$/,
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
    new webpack.optimize.AggressiveMergingPlugin(),
    new BrotliPlugin(),
    new CompressionPlugin(),
    new WorkboxPlugin.GenerateSW({
      cacheId: "techqueria",
      swDest: "sw.js",
      globDirectory: "./dist",
      globPatterns: ["index.html", "404.html", "**/*.{js,css,png,svg,jpg,jpeg,icon,json}"],
      offlineGoogleAnalytics: true,
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [{
        urlPattern: /\.(?:html)$/,
        handler: "networkFirst",
        options: {
          cacheName: "page-cache",
          expiration: {
            maxEntries: 50
          },
        }
      },
      {
        urlPattern: /\.(?:png|gif|jpg|svg|ico|jpeg|css|js)$/,
        handler: "cacheFirst",
        options: {
          cacheName: "assets-cache"
        }
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
      }
      ]
    })
  ],
  context: path.join(__dirname, "assets"),
  entry: {
    app: ["./js/app"],
    eventbriteeact: ["whatwg-fetch", "./js/eventbrite-index"]
  },
  output: {
    filename: path.join("assets", "js", "[name].js"),
    path: path.join(__dirname, "dist"),
  }
};
