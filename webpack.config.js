/**
* Copyright (C) 2017 by Jim Geist
*
* Permission to use, copy, modify, and/or distribute this software for any purpose
* with or without fee is hereby granted.
*
* THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
* REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND
* FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
* INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS
* OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER
* TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF
* THIS SOFTWARE.
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
