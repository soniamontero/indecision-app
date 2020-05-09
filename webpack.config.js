// entry => output
const path = require('path') // loaded from node to our env to use the function path.join below

console.log(__dirname); // __dirname contains the path to our current location.
// console.log(path.join(__dirname, 'public')); // __dirname contains the path to our current location.

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js' // can be called anything
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
}