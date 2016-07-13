var express = require('express');
var app = express();
var myApp_js = require('../app');

//Creating a route for my app.js
app.get('/sales/:week_name', function(req, res){
  var week_name = req.params.week_name
  res.send(myApp_js.weeklyStats(week_name));
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
