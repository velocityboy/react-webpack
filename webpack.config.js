var path = require('path')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
};
