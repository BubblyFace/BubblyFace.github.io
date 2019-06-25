 const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 const {
   CleanWebpackPlugin
 } = require('clean-webpack-plugin');

 module.exports = {
   entry: path.join(__dirname, '../src/index.js'),
   output: {
     filename: 'bundle.[hash].js',
     path: path.join(__dirname, '../dist')
   },
   module: {
     rules: [{
         test: /\.m?js$/,
         exclude: /(node_modules|bower_components)/,
         use: {
           loader: 'babel-loader',
           options: {
             presets: ['@babel/preset-env'],
             plugins: ['@babel/plugin-proposal-object-rest-spread']
           }
         }
       },
       {
         test: /\.css$/,
         use: ['style-loader', 'css-loader']
       }
     ]
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