const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const OUTPUT_DIR = path.resolve(__dirname, 'build');

module.exports = merge(common, {
  mode: 'development',

  devtool: 'source-map',

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
