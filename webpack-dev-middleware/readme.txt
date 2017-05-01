server.use(devMiddleware)

        var devMiddleware = require('webpack-dev-middleware')(compiler, {
        publicPath: webpackConfig.output.publicPath,
        stats: {
          colors: true,
          chunks: false
        }
      })
		var compiler = webpack(webpackConfig)
