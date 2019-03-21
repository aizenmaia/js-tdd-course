const webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    filename: './app.js'
  },

  output: {
    filename: './build.js'
  },


  module: {
    rules: [
{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets:  [
          ['es2015' , {modules: false}]

        ]
      }
}]

    
  }

  
}
