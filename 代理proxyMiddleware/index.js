/**
 * Created by Administrator on 2017-5-1.
 */
var express = require('express')
var server = express();


var proxyMiddleware = require('http-proxy-middleware')
var context = [ //代理路径
    '/shopping',
    '/ugc',
    '/v1',
    '/v2',
    '/v3',
    '/v4',
    '/bos',
    '/member',
    '/promotion',
    '/eus',
];

var proxypath = 'https://mainsite-restapi.ele.me';
var options = {
    target: proxypath,
    changeOrigin: true,
}

server.use(proxyMiddleware(context, options))
var port = 3000;
server.listen(port, function(err) {
    if (err) {
        console.error(err)
        return
    }
    var uri = 'http://localhost:' + port
    console.log('Listening at ' + uri + '\n')
})
