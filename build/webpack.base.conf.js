 const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');


 module.exports = {
   entry: path.join(__dirname, '../src/index.js'),
   output: {
     filename: 'bundle.[hash].js',
     path: path.join(__dirname, '../dist')
   },
   module: {
     rules: [{
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
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