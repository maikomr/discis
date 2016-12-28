/**
 * Created by maiko on 27/12/2016.
 */
var webpack = require('webpack');
var path = require('path');

var SOURCE_DIR = path.resolve(__dirname, 'src');
var OUTPUT_DIR = path.resolve(__dirname, 'public');

var config = {
  entry: SOURCE_DIR + '/index.js',
  output: {
    path: OUTPUT_DIR,
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?/,
        include: SOURCE_DIR,
        loaders: ['babel']
      }
    ]
  }
};

module.exports = config;
