const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const app = express();
var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
 
const compiler = webpack(webpackConfig);
 
app.use(express.static(__dirname + '/www'));
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  watchOptions: {
        aggregateTimeout: 300,
        poll: true
  },
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

app.post('/jobs', function(req, res){
  console.log('post request from hi', req.body);
  res.send('hello world!!!!!!!!!');
});
 
 
const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});