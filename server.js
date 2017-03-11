const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const app = express();
const testdb = require('./db/config.js');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
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

app.post('/jobs', function(req, res) {
  //console.log('post request from hi', req.body);
  var data = {
    title: req.body.title,
    location: req.body.location, 
    type: req.body.type, 
    company: req.body.company, 
    created_at: req.body.created_at
  }
  testdb.createJobRecord(data);
});

app.get('/jobs', function(req, res) {
  testdb.AppliedJob.find({}, function(errs, results) {
    console.log(results);
    res.json(results);
  });
});


 
 
const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});