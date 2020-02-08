const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackDeployPlugin = require('html-webpack-deploy-plugin');

// Config directories
const ROOT_DIR = path.resolve(__dirname);
const SRC_DIR = path.resolve(__dirname, 'src');
const OUTPUT_DIR = path.resolve(__dirname, 'build');
const NO_ORIGINAL_IMAGES = [
  path.resolve(__dirname, 'src/assets/images/original'),
];

// Any directories you will be adding code/files into, need to be
// added to this array so webpack will pick them up
const defaultInclude = [SRC_DIR];

module.exports = {
  entry: `${SRC_DIR}/index.js`,
  output: {
    // filename: 'bundle.js',
    filename: '[name].[hash].bundle.js',
    chunkFilename: '[name].[hash].bundle.js',
    path: OUTPUT_DIR,
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-flow',
            ],
          },
        },
        include: defaultInclude,
      },

      {
        test: /\.(jpe?g|png|gif)$/,
        use: [{loader: 'file-loader?name=img/[name]__[hash:base64:5].[ext]'}],
        include: defaultInclude,
        exclude: NO_ORIGINAL_IMAGES,
      },

      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [{loader: 'file-loader?name=font/[name]__[hash:base64:5].[ext]'}],
        include: defaultInclude,
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: ROOT_DIR + '/index.html',
      chunksSortMode: 'none',
    }),
    new HtmlWebpackDeployPlugin({
      assets: {
        copy: [{from: 'src/preloader.css', to: ''}],
        links: ['preloader.css'],
      },
      useAssetsPath: false,
    }),
  ],
};
