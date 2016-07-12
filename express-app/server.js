var express = require('express');
var app = express();

app.get('/testing', function (req, res){
  res.send('new route')
})

  // create a test route
  app.get('/test', function (req, res) {
   res.send('I am learning how to create a route');
  });

// create a route
app.get('/', function (req, res) {
 res.send('Hello World!');
});
app.get('/hello', function (req, res) {
 res.send('Hello codeX!');
});

//start the server
var server = app.listen(3000, function () {

 var host = server.address().address;
 var port = server.address().port;

//console.log('Example app listening at http://%s:%s', host, port);

});
