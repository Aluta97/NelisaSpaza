exports.show = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) return next(err);
		connection.query('SELECT * from users', [], function(err, results) {
        if (err) return next(err);
		res.render( 'users', {
				users : results,
		});
      });
      // console.log(results);
	});
};

exports.showAdd = function(req, res){
	res.render('add_users');
}

exports.add = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) return next(err);
		var input = req.body;
		var data = {
      		username : input.username,
          password : input.password
  	};

	connection.query('insert into users set ?', data, function(err, results) {
			if (err) return next(err);
		res.redirect('/users');
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
