// const webpack = require("webpack");
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Config directories
const ROOT_DIR = path.resolve(__dirname);
const SRC_DIR = path.resolve(__dirname, 'src');
const OUTPUT_DIR = path.resolve(__dirname, 'build');
const CUSTOM_LIBRARIES = [
  path.resolve(__dirname, 'node_modules/react-image-gallery/styles'), //react-image-gallery
];

// Any directories you will be adding code/files into, need to be
// added to this array so webpack will pick them up
const defaultInclude = [SRC_DIR];

module.exports = {
  mode: 'development',
  //target: "electron-renderer",
  //entry: ["@babel/polyfill", SRC_DIR + "/index.js"],
  entry: `${SRC_DIR}/index.js`,
  output: {
    path: OUTPUT_DIR,
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{loader: 'style-loader'}, {loader: 'css-loader'}],
        include: [...defaultInclude, ...CUSTOM_LIBRARIES],
      },

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
      inject: 'body',
    }),

    // new webpack.DefinePlugin({
    //   "process.env.NODE_ENV": JSON.stringify("development")
    // }),

    // new WriteFilePlugin(),

    // new CopyPlugin([
    //   {
    //     from: `buildResources/bindings/${setBindingFileFolder()}/bindings.node`,
    //     to: ""
    //   }
    // ])
  ],

  devtool: 'source-map',
  // devtool: "eval",
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
};
