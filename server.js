var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var application = require('./app');

app.get('/sales/:week_name', function(req, res){
  var week_name = req.params.week_name
   //console.log(week_name)
  res.send(application.weeklyStats(week_name));
});

// create a route

// app.get('/', function (req, res) {
//     res.render('home');
// });
//
// app.engine('handlebars', exphbs({defaultLayout: 'index'}));
// app.set('view engine', 'handlebars');

//set the port number to an existing environment variable PORT or default to 5000
app.set('port', (process.env.PORT || 7001));
//start the app like this:
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
