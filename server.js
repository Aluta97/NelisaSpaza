// var express = require('express');
// var exphbs = require('express-handlebars');
// var app = express();
// var application = require('./app');
//
//'use strict';

var express = require('express'),
    exphbs  = require('express-handlebars'),
    mysql = require('mysql'),
    myConnection = require('express-myconnection'),
    bodyParser = require('body-parser'),
    categories = require('./routes/categories');
    products = require('./routes/products');
    purchases = require('./routes/purchases');
    sales = require('./routes/sales');

var app = express();

var dbOptions = {
      host: 'localhost',
      user: 'root',
      password: 'lusindisomkiva',
      port: 3306,
      database: 'nelisa'
};

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

//setup middleware
app.use(myConnection(mysql, dbOptions, 'single'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// function errorHandler(err, req, res, next) {
//   res.status(500);
//   res.render('error', { error: err });
// }

//setup the handlers


app.get('/categories', categories.show);

app.get('/products', products.show);

app.get('/purchases', purchases.show);

app.get('/sales', sales.show);



// var portNumber = process.env.CRUD_PORT_NR || 3000;
//
// //start everything up
// app.listen(portNumber, function () {
//   //  console.log('Create, Read, Update, and Delete (CRUD) example server listening on:', portNumber);
// });




// app.get('/sales/:week_name', function(req, res){
//   var week_name = req.params.week_name
//    //console.log(week_name)
//   res.send(application.weeklyStats(week_name));
// });
//
//set the port number to an existing environment variable PORT or default to 5000
app.set('port', (process.env.PORT || 5000));
//start the app like this:
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
