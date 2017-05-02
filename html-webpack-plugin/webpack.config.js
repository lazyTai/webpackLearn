/**
 * Created by liumingtai on 2017-5-1.
 callme 17602014220
 github:https://github.com/lazyTai
 */
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpackConfig = {
  entry: './index.js',
  output: {
    path: 'dist',
    filename: 'index_bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "我的webnpack配置几把",
      filename:'index.html'
    })
  ]
}
module.exports = webpackConfig
