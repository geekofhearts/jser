// TODO load config file

var port = 1337;

// TODO check if the first process

// If not, add a listener for requests from the main server

// If so, spawn the specified number of subprocesses.


// run the server:
var http = require('http');

var jser = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1>Hello World</h1>\n');
  res.end();
});

jser.listen(port);

console.log('Server running at http://*:1337/');
