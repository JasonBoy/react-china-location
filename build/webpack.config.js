const path = require('path');
const webpack = require('webpack');

const PROD_MODE = process.env.NODE_ENV === 'production';

const entry = path.resolve(__dirname, '../src/ChinaLocation.js');

const config = {
  entry: entry,
  output: {
    path: path.resolve(__dirname, '../dist/'),
    filename: PROD_MODE ? 'react-china-location.min.js' : 'react-china-location.js',
    library: 'ReactChinaLocation',
    libraryTarget: 'umd',
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