var bcrypt = require('bcrypt');

exports.show = function(req, res) {
  res.render('signup');
}

exports.add = function(req, res, next) {
  req.getConnection(function(err, connection) {
    if (err) return next(err);
    var data = {
      username: req.body.username,
      password: req.body.password,
      email : req.body.email
    };

    console.log(data);

    var password = req.body.password;
    bcrypt.hash(password, 10, function(err, hash) {
            data.password = hash;

    connection.query('insert into users set ?', data, function(err, results) {
      if (err) return next(err)
      res.redirect('/login');
});
  });
});
};
