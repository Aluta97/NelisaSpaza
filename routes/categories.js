
exports.show = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) return next(err);
		connection.query('SELECT * from categories', [], function(err, results) {
        if (err) return next(err);
		res.render( 'categories', {
				categories : results,
				user : req.session.user,
				is_admin:req.session.user.is_admin
		});
      });
	});
};

exports.showAdd = function(req, res){
	res.render('add_category', {user : req.session.user,
	is_admin:req.session.user.is_admin});
}

exports.add = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) return next(err);
		var input = req.body;
		var data = {
      		category : input.category,
  	};

	connection.query('insert into categories set ?', data, function(err, results) {
			if (err) return next(err);
		res.redirect('/categories');
	});

	});
};

exports.get = function(req, res, next){
	var id = req.params.id;
	req.getConnection(function(err, connection){
		connection.query('SELECT * FROM categories WHERE id = ?', [id], function(err,rows){
			if(err) return next(err);
			res.render('edit_category',{page_title:"Edit Customers - Node.js", data : rows[0],
			user : req.session.user,
			is_admin:req.session.user.is_admin
			});
		});
	});
};

//update categories table
exports.update = function(req, res, next){
  var data = req.body;
  var id = req.params.id;
  req.getConnection(function(err, connection){
			connection.query('UPDATE categories SET ? WHERE id = ?', [data, id], function(err, rows){
    			if (err) next(err);
          		res.redirect('/categories');
    		});

    });
};

exports.delete = function(req, res, next){
	var id = req.params.id;
	req.getConnection(function(err, connection){
		connection.query('DELETE FROM categories WHERE id = ?', [id], function(err,rows){
			if(err) return next(err);
			res.redirect('/categories');
		});
	});
};
