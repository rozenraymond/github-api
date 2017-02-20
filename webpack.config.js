// Include the contents of some package
const HTMLWebPackPlugin = require('html-webpack-plugin');

// Configure it
const HTMLWebpackPluginConfig = new HTMLWebPackPlugin({
  template: __dirname + "/app/template.html",
  filename: "index.html",
  inject: "body"
});

// Include it as a plugin
module.exports = {
  entry: [
    './app/main.js'
  ],
  output: {
    path: __dirname + "/dist",
    filename: 'app_bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  plugins: [
    HTMLWebpackPluginConfig
  ]
};
