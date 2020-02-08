const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const SRC_DIR = path.resolve(__dirname, 'src');
const CUSTOM_LIBRARIES = [
  path.resolve(__dirname, 'node_modules/react-image-gallery/styles'), //react-image-gallery
  path.resolve(__dirname, 'node_modules/animate.css/'), //animate.css
  path.resolve(__dirname, 'node_modules/normalize.css/'), //normalize.css
];

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
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        '*.js',
        '*.js.map',
        '*.html',
        '*.css',
        '*.txt',
      ],
    }),
  ],
});
