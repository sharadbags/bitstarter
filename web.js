var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

var buf = new Buffer(32);
app.get('/', function(request, response) {
buf.write(fs.readFileSync('./index.html').toString());    
response.send(buf);
})

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
