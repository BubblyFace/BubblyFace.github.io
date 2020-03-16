const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf.js');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    port: 3000,
    historyApiFallback: true
    // proxy: {
    //   '/': {
    //     target: 'http://127.0.0.1:8000',
    //     secure: false,
    //     bypass: function(req, res, proxyOptions) {
    //       if (req.headers.accept.indexOf('html') !== -1) {
    //         console.log('Skipping proxy for browser request.');
    //         return '/index.html';
    //       }
    //     }
    //   }
    // }
  }
});