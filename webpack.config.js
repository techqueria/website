const webpack = require("webpack");
const path = require("path");

// Workbox
const WorkboxPlugin = require("workbox-webpack-plugin");
// Brotli
const BrotliPlugin = require("brotli-webpack-plugin");
// GZip
const CompressionPlugin = require("compression-webpack-plugin");

export default {
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
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true
      },
      output: {
        comments: false
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new BrotliPlugin(),
    new CompressionPlugin(),
    new WorkboxPlugin({
      cacheId: "techqueria",
      globDirectory: "dist",
      globPatterns: ["**/*.{css,png,gif,jpg,svg,xml,js,ico,json}"],
      globStrict: false,
      swDest: path.join("dist", "sw.js"),
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [{
        urlPattern: /\.(?:png|gif|jpg)$/,
        handler: "networkFirst",
        options: {
            cacheName: "techqueria-image-cache"
          }
      },
      {
        urlPattern: new RegExp("https://imgur.com"),
        handler: "staleWhileRevalidate"
      },
      {
        urlPattern: new RegExp("https://google-analytics.com"),
        handler: "staleWhileRevalidate"
      },
      {
        urlPattern: new RegExp("https://twemoji.maxcdn.com"),
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
