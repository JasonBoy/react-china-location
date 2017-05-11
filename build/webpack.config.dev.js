const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const PROD_MODE = process.env.NODE_ENV === 'production';

const entry = path.resolve(__dirname, '../demo/index.js');

const config = {
  entry: {
    vendors: ['react', 'react-dom', 'china-location'],
    'data-location': ['china-location/dist/location.json'],
    app: entry,
  },
  output: {
    path: path.resolve(__dirname, '../demo/build'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react'],
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(PROD_MODE ? 'production' : 'development')
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendors', 'data-location'],
      minChunks: Infinity
    }),
    new HtmlWebpackPlugin({
      template: './demo/index.html',
      filename: 'index.html',
      inject: 'body',
      chunksSortMode: 'dependency'
    }),
  ],
  devtool: 'source-map',
};

if(PROD_MODE) {
  const plugins = config.plugins;
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      drop_console: true,
      dead_code: true,
      drop_debugger: true,
    },
    sourceMap: true,
    mangle: true,
  }))
}

module.exports = config;