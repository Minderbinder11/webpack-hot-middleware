const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: {
    'app': [
      'babel-polyfill',
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
      'react-hot-loader/patch',
      // And then the actual application
      './components/app.jsx'
    ]
  },
  output: {
    path: __dirname,
    filename: './dist/bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },{
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.json$/,
        use: "json-loader"
      }
    ]
  }
};