exports.show = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) return next(err);
    connection.query('SELECT products.id as product_id, products.description, categories.category FROM categories inner join products on products.category_Id = categories.Id ORDER BY product_id', [], function(err, results) {
        	if (err) return next(err);
    		res.render( 'products', {
					products : results,
    		});
      	});
	});
};

exports.showAdd = function(req, res) {
    req.getConnection(function(err, connection) {
        if (err) return next(err);
        connection.query('SELECT * from categories', [], function(err, categories) {
            if (err) return next(err);
            res.render('add_product', {
                categories: categories,
            });
        });
    });
};

exports.add = function(req, res, next) {
    req.getConnection(function(err, connection) {
        if (err) return next(err);
        var data = {
            category_id: Number(req.body.category_id),
          //  product: req.body.product
        };

        connection.query('insert into products set ?', data, function(err, results) {
            if (err) return next(err);
            res.redirect('/products');
        });
    });
};
