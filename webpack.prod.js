const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const SRC_DIR = path.resolve(__dirname, 'src');
const CUSTOM_LIBRARIES = [
  path.resolve(__dirname, 'node_modules/react-image-gallery/styles'), //react-image-gallery
  path.resolve(__dirname, 'node_modules/animate.css/'), //animate.css
  path.resolve(__dirname, 'node_modules/normalize.css/'), //normalize.css
];
const PRELOADER = path.resolve(__dirname, 'src/preloader.css');

module.exports = merge(common, {
  mode: 'production',

  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    minimize: true,
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
        include: [SRC_DIR, ...CUSTOM_LIBRARIES],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      // chunkFilename: '[id].[hash].css',
    }),
    // new CopyWebpackPlugin([
    //   {
    //     from: PRELOADER,
    //     // transform: function(fileContent, path) {
    //     //   console.log('fileContent: ', fileContent);
    //     //   console.log('path: ', path);
    //     // },
    //   },
    // ]),
  ],
});
