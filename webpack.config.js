/**
* Copyright (C) 2017 by Jim Geist
*
* This software is licensed BSD0 per the contents of the file LICENSE.txt in
* the root of the repository.
*/

var path = require('path')

module.exports = {
  context: path.resolve(__dirname),
  entry: './src/server.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      include: [
        path.resolve(__dirname, 'src'),
      ],
      query: {
        presets: [
          ['env', {es2015: {modules: false}}],
          'react',
          'stage-0'
        ],
        // plugins: [
        //   'transform-react-jsx',
        // ]
      }
    }],
  },
  externals: {
    'express': 'require(\'express\')',
  },
  target: 'web',
  resolve: {
    modules: [path.resolve(__dirname, '../src'), 'node_modules'],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
  }
};
