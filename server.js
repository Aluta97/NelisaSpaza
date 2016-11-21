var express = require('express'),
    exphbs  = require('express-handlebars'),
    mysql = require('mysql'),
    myConnection = require('express-myconnection'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    categories = require('./routes/categories'),
    products = require('./routes/products'),
    purchases = require('./routes/purchases'),
    sales = require('./routes/sales'),
    users = require('./routes/users'),
    signup = require('./routes/signup'),
    flash = require('express-flash'),
    mid = require('./middlewares');
    bcrypt = require('bcrypt');

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
  "Nelisa":"admin",
  "aluta" :"viewer",
  "lusindiso":"admin"
};

//HTTP session to check if someone is logged in
app.use(session({
secret: 'keyboard cat',
resave: false,
saveUninitialized: true
}))

app.use(flash());

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

//middleware to check if the user is Authenticated
//if the user is not authenticated redirect to home page
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
        email : req.body.email,
        is_admin : rolesMap[req.body.username] === "admin"
      };

        //getting my users from the database
      req.getConnection(function(err, connection){
        if (err) return next(err);

        connection.query('SELECT * from users where username = ?', [inputUser.name], function(err, results) {
            if (err) return next(err);

              if (results.length === 0){
                console.log("Access denied....");

                req.flash("warning", "You have entered a wrong username or password")
                return res.redirect("/login");
              }
              else{
                var dbUser = results[0];
                  bcrypt.compare(inputUser.password, dbUser.password, function(err, match) {

                if(match){
                       console.log("password match.....");

                      req.session.user = inputUser;
                      res.redirect('/home');
                }
                else{
                      return res.redirect("/login");
                }
                });
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
app.get('/categories/add', checkUser,mid.checkIfAdmin, categories.showAdd);
app.get('/categories/edit/:id', checkUser,mid.checkIfAdmin, categories.get);
app.post('/categories/update/:id', checkUser,mid.checkIfAdmin, categories.update);
app.post('/categories/add', checkUser,mid.checkIfAdmin, categories.add);
app.get('/categories/delete/:id', checkUser,mid.checkIfAdmin, categories.delete);

app.post('/categories/search', categories.searchCategories);

app.get('/products',checkUser, products.show);
app.get('/products/add',checkUser,mid.checkIfAdmin, products.showAdd);
app.get('/products/edit/:id',checkUser,mid.checkIfAdmin, products.get);
app.post('/products/update/:id',checkUser,mid.checkIfAdmin, products.update);
app.post('/products/add',checkUser,mid.checkIfAdmin, products.add);
app.get('/products/delete/:id',checkUser,mid.checkIfAdmin, products.delete);

app.post('/products/search/',products.productSearch);

app.get('/sales',checkUser, mid.checkIfAdmin,sales.show);
app.get('/sales/add',checkUser,mid.checkIfAdmin, sales.showAdd);
app.get('/sales/edit/:id',checkUser,mid.checkIfAdmin, sales.get);
app.post('/sales/update/:id',checkUser,mid.checkIfAdmin, sales.update);
app.post('/sales/add/',checkUser,mid.checkIfAdmin, sales.add);
app.get('/sales/delete/:id',checkUser,mid.checkIfAdmin, sales.delete);

app.post('/sales/search/',sales.salesSearch);

app.get('/purchases',checkUser,mid.checkIfAdmin, purchases.show);
app.get('/purchases/add',checkUser,mid.checkIfAdmin, purchases.showAdd);
app.get('/purchases/edit/:id',checkUser,mid.checkIfAdmin, purchases.get);
app.post('/purchases/update/:id',checkUser,mid.checkIfAdmin, purchases.update);
app.post('/purchases/add/',checkUser,mid.checkIfAdmin, purchases.add);
app.get('/purchases/delete/:id',checkUser,mid.checkIfAdmin, purchases.delete);

app.post('/purchases/search/',purchases.purchasesSearch);

app.get('/users', checkUser,mid.checkIfAdmin, users.show);
app.get('/users/add',checkUser,mid.checkIfAdmin, users.showAdd);
app.get('/users/edit/:id',checkUser,mid.checkIfAdmin, users.get);
app.post('/users/update/:id',checkUser,mid.checkIfAdmin, users.update);
app.post('/users/add/',checkUser,mid.checkIfAdmin, users.add);
app.get('/users/delete/:id',checkUser,mid.checkIfAdmin, users.delete);

app.get('/signup',signup.show);
app.post('/signup/add',signup.add);

app.use(errorHandler);

// app.get('/sales/:week_name', function(req, res){
//   var week_name = req.params.week_name
//    //console.log(week_name)
//   res.send(application.weeklyStats(week_name));
// });

//set the port number to an existing environment variable PORT or default to 5000
app.set('port', (process.env.PORT || 5000));
//start the app like this:
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
