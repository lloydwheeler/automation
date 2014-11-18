var express = require('express'),
		path = require('path')
var app = express()


// app.use(express.static(path.join(__dirname, '/.tmp/html')));
app.use(express.static(path.join(__dirname, '/assets/css')));

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('Example app listening at http://%s:%s', host, port)
});
