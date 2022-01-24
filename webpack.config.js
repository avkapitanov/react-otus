const path = require('path');

module.exports = {
  entry: './src/index.ts',
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [],
};
