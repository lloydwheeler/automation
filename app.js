var express = require('express'),
		path = require('path'),
		app = express();

// Routes for html and assets
app.use('/', express.static(path.join(__dirname, '/.tmp/html')));
app.use('/', express.static(path.join(__dirname, '/')));

// Start the server
var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('Example app listening at http://%s:%s', host, port)
});
