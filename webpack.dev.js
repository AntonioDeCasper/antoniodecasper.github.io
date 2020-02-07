const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const OUTPUT_DIR = path.resolve(__dirname, 'build');
const SRC_DIR = path.resolve(__dirname, 'src');
const CUSTOM_LIBRARIES = [
  path.resolve(__dirname, 'node_modules/react-image-gallery/styles'), //react-image-gallery
  path.resolve(__dirname, 'node_modules/animate.css/'), //animate.css
  path.resolve(__dirname, 'node_modules/normalize.css/'), //normalize.css
];

module.exports = merge(common, {
  mode: 'development',

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{loader: 'style-loader'}, {loader: 'css-loader'}],
        include: [SRC_DIR, ...CUSTOM_LIBRARIES],
      },
    ],
  },

  devServer: {
    contentBase: OUTPUT_DIR,
    port: 3000,
    host: '0.0.0.0',
    hot: true,
    historyApiFallback: true, // this will let you use React router for SPA in dev
    stats: {
      colors: true,
      chunks: false,
      children: false,
    },
  },
});
