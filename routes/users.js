// var bcrypt = require('bcrypt');

exports.show = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) return next(err);
		connection.query('SELECT * from users', [], function(err, results) {
        if (err) return next(err);
		res.render( 'users', {
				users : results,
				user : req.session.user,
				is_admin:req.session.user.is_admin
		});
      });
	});
};

exports.showAdd = function(req, res){
	res.render('add_users', {user : req.session.user,
	is_admin:req.session.user.is_admin});
};

exports.add = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) return next(err);

		var input = req.body;

		var data = {
      		username : input.username,
					email 	 : input.email,
					password : input.password

  	}
		// var password = req.body.password;
		// bcrypt.hash(password, 10, function(err, hash) {
		// 				data.password = hash;
	connection.query('insert into users set ?', data, function(err, results) {
			if (err) return next(err);
		res.redirect('/users');
			});

		});
	// });
};

exports.get = function(req, res, next){
	var id = req.params.id;
	req.getConnection(function(err, connection){
		connection.query('SELECT * FROM users WHERE id = ?', [id], function(err,rows){
			if(err) return next(err);
			res.render('edit_users',{page_title:"Edit Customers - Node.js", data : rows[0],
			user : req.session.user,
			is_admin:req.session.user.is_admin
			});
		});
	});
};

exports.update = function(req, res, next){
  var data = req.body;
  var id = req.params.id;
  req.getConnection(function(err, connection){
			connection.query('UPDATE users SET ? WHERE id = ?', [data, id], function(err, rows){
    			if (err) next(err);
          		res.redirect('/users');
    		});

    });
};

exports.delete = function(req, res, next) {
    var id = req.params.id;
    req.getConnection(function(err, connection) {
        connection.query('DELETE FROM users WHERE id = ?', [id], function(err, rows) {
            if (err) return next(err);
            res.redirect('/users');
        });
    });
};
