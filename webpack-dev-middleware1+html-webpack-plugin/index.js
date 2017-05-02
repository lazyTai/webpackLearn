/**
 * Created by liumingtai on 2017-5-1.
 callme 17602014220
 github:https://github.com/lazyTai
 */
var express = require('express')
var webpack = require('webpack')
var WebpackDevMiddleware = require('webpack-dev-middleware')
var WebpackHotMiddleware = require('webpack-hot-middleware')

var config = require('./config/webpack.dev.config');

var compiler = webpack(config)
app = express();
app.set('views', './views');
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
app.use(express.static('public'));

app.use(WebpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {
        colors: true
    }
}))
app.use(WebpackHotMiddleware(compiler))

var router = express.Router()
router.get('/', function(req, res, next) {
    res.render('index', {
        message: 'Hey there!'
    });
})
app.use(router)

app.listen(8081, function() {
    console.log('Listening on 8081')
})