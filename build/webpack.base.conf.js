const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: path.join(__dirname, '../src/index.js'),
  output: {
    filename: 'bundle.[hash].js',
    path: path.join(__dirname, '../dist')
  },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'lib/components'),
      '@lib': path.resolve(__dirname, 'lib')
    }
  },
  module: {
    rules: [{
      test: /\.js[x]?$/,
      loader: 'eslint-loader',
      enforce:'pre',
      exclude: /(node_modules|bower_components)/
    },
    {
      test: /\.(js|jsx)$/,
      loader: 'babel-loader'
    },
    {
      test: /\.(md)$/,
      use: [{
        loader: 'raw-loader'
      }]
    },
    {
      test: /\.(mdo)$/,
      use: [{
        loader: 'raw-loader'
      }]
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    },
    {
      test: /\.less$/,
      use: [{
        loader: 'style-loader' // creates style nodes from JS strings
      },
      {
        loader: 'css-loader' // translates CSS into CommonJS
      },
      {
        loader: 'less-loader', // compiles Less to CSS
        options: {
          strictMath: true,
          noIeCompat: true
        }
      }
      ]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../public/index.html')
    })
  ]
};


//  {
//   test: /\.css$/,
//   use: ['style-loader', 'css-loader']
// }