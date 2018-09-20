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
    umdNamedDefine: true,
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    'prop-types': 'prop-types',
    'china-location': 'china-location',
  },
  /*externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM"
    },
    "prop-types": {
      commonjs: "prop-types",
      commonjs2: "prop-types",
      amd: "PropTypes",
      root: "PropTypes"
    },
    'china-location': {
      commonjs2: 'china-location',
      commonjs: 'china-location',
      amd: 'ChinaLocation',
      root: 'ChinaLocation',
    },
  },*/
  // resolve: {
  //   alias: {
  //     'react': path.resolve(__dirname, '../node_modules/react') ,
  //     'react-dom': path.resolve(__dirname, '../node_modules/react-dom'),
  //     'prop-types': path.resolve(__dirname, '../node_modules/prop-types'),
  //     'china-location': path.resolve(__dirname, '../node_modules/china-location'),
  //   }
  // },
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
  // devtool: 'source-map',
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
