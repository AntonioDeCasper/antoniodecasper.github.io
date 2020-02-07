const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackDeployPlugin = require('html-webpack-deploy-plugin');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');

// Config directories
const ROOT_DIR = path.resolve(__dirname);
const SRC_DIR = path.resolve(__dirname, 'src');
const OUTPUT_DIR = path.resolve(__dirname, 'build');
const NO_ORIGINAL_IMAGES = [
  path.resolve(__dirname, 'src/assets/images/original'),
];
const PRELOADER = path.resolve(__dirname, 'src/preloader.css');
const PRELOADER_FONT = path.resolve(
  __dirname,
  'src/assets/fonts/Montserrat-Medium.ttf',
);

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
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        '*.js',
        '*.js.map',
        '*.html',
        '*.css',
        '*.txt',
      ],
      // cleanOnceBeforeBuildPatterns: ['**/*', '!static-files*'],
    }),
    // new HtmlWebpackTagsPlugin({tags: ['preloader.css'], append: true}),
    // new CopyWebpackPlugin([
    //   {
    //     from: PRELOADER,
    //   },
    //   {
    //     from: PRELOADER_FONT,
    //   },
    // ]),
  ],
};
