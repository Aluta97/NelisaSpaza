


var express = require('express'),
    exphbs  = require('express-handlebars'),
    mysql = require('mysql'),
    myConnection = require('express-myconnection'),
    bodyParser = require('body-parser'),
    session = require('express-session');
    categories = require('./routes/categories');
    products = require('./routes/products');
    purchases = require('./routes/purchases');
    sales = require('./routes/sales');
    users = require('./routes/users');
    //application = require('./app');

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

var rolesMap = {
  "nelisa":"admin",
  "aluta" :"viewer"
};

app.use(session({
secret: 'keyboard cat',
resave: false,
saveUninitialized: true
}))


app.use(express.static(__dirname + '/public'));

//setup middleware
app.use(myConnection(mysql, dbOptions, 'single'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

function errorHandler(err, req, res, next) {
  res.status(500);
  res.render('error', { error: err });
}

app.get("/", function(req, res){
    res.redirect("/home");
});

var checkUser = function(req, res, next){
    console.log("checkUser...");
  if(req.session.user || req.path === '/login'){
        return next();
  }
   res.redirect("/login");
    // next();
};

app.post("/login", function(req, res, next){

      var inputUser = {
        name : req.body.username,
        password : req.body.password,
        is_admin : rolesMap[req.body.username] === "admin"
      };
        //getting my users from the database
      req.getConnection(function(err, connection){
        if (err) return next(err);

        connection.query('SELECT * from users where username = ?', [inputUser.name], function(err, results) {
            if (err) return next(err);

              // console.log(user);
              // console.log(results);

              if (results.length === 0){
                console.log("Access denied....");
                return res.redirect("/login");
              }
              else{
                var dbUser = results[0];
                if(inputUser.password === dbUser.password){
                      //console.log("Wrong Password.....");
                      //return next();
                      req.session.user = inputUser;
                      res.redirect('/home');
                }
                else{
                      return res.redirect("/login");
                }
              }

          });
      });
})

app.get("/home",checkUser,function(req, res){
    res.render("home", {user : req.session.user});
});

app.get("/logout", function(req, res){
    delete req.session.user;
    res.redirect("/login")
})

app.get("/login", function(req, res){
    res.render("login", {});
});

app.get('/categories', checkUser, categories.show);
app.get('/categories/add', categories.showAdd);
app.get('/categories/edit/:id', categories.get);
app.post('/categories/update/:id', categories.update);
app.post('/categories/add', categories.add);
app.get('/categories/delete/:id', categories.delete);

app.get('/products', products.show);
app.get('/products/add', products.showAdd);
app.get('/products/edit/:id', products.get);
app.post('/products/update/:id', products.update);
app.post('/products/add', products.add);
app.get('/products/delete/:id', products.delete);

app.get('/sales', sales.show);
app.get('/sales/add', sales.showAdd);
app.get('/sales/edit/:id', sales.get);
app.post('/sales/update/:id', sales.update);
app.post('/sales/add/', sales.add);
app.get('/sales/delete/:id', sales.delete);

app.get('/purchases', purchases.show);
app.get('/purchases/add', purchases.showAdd);
app.get('/purchases/edit/:id', purchases.get);
app.post('/purchases/update/:id', purchases.update);
app.post('/purchases/add/', purchases.add);
app.get('/purchases/delete/:id', purchases.delete);

app.get('/users', users.show);
app.get('/users/add', users.showAdd);
app.post('/users/add/', users.add);
app.post('/users/update/:id', users.update);

app.use(errorHandler);


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
app.set('port', (process.env.PORT || 3000));
//start the app like this:
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
