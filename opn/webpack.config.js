/**
 * Created by liumingtai on 2017-5-1.
 callme 17602014220
 github:https://github.com/lazyTai
 */
var express = require('express');

var webpack = require('webpack');

var server = express()
var HtmlWebpackPlugin = require('html-webpack-plugin')
server.set('views', './views');
server.engine('.html', require('ejs').__express);
server.set('view engine', 'html');
var path = require('path')
var compiler = webpack({
  entry: {
    app: './src/main.js'
  },
  output: {
    path: __dirname+'dist',
    publicPath: "http://localhost:8081/dist/",
    filename: '[name].js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      // template: 'index.html',
      // favicon: 'favicon.ico',
      // inject: true
    })
  ]
})
var opn = require('opn')

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: "/dist/",
  stats: {
    colors: true,
    chunks: false
  }
})

var hotMiddleware = require('webpack-hot-middleware')(compiler)
server.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
server.use(hotMiddleware)


var router = express.Router()
router.get('/', function (req, res, next) {
  res.render('index', {a: "a"})
})
server.use(router)
var port = 8081;
module.exports = server.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  var uri = 'http://localhost:' + port
  console.log('Listening at ' + uri + '\n')
  opn(uri)

})
