/**
 * Created by liumingtai on 2017-5-1.
 callme 17602014220
 github:https://github.com/lazyTai
 */
var webpack = require('webpack')
module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    './client/index.js'
  ],
  output: {
    path: '/',
    publicPath: 'http://localhost:8081/scripts/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
}
