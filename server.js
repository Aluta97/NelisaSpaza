var express = require('express');
var app = express();
var application = require('./app');

app.get('/sales/:week_name', function(req, res){
  var week_name = req.params.week_name
   //console.log(week_name)
  res.send(application.weeklyStats(week_name));
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

// //set the port number to an existing environment variable PORT or default to 5000
// app.set('port', (process.env.PORT || 5000));
// //start the app like this:
// app.listen(app.get('port'), function() {
//   console.log('Node app is running on port', app.get('port'));
// });
