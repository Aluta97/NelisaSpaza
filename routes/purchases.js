exports.show = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) return next(err);
    connection.query('SELECT purcahses.id as purcahses_id, products.description, purcahses.quantity, purcahses.purchase_date, purcahses.cost FROM purcahses inner join products on purcahses.prod_id = products.id ORDER BY purcahses.id DESC', [], function(err, results) {
        	if (err) return next(err);
    		res.render( 'purchases', {
					purchases : results,
    		});
      	});
	});
};

exports.showAdd = function(req, res) {
    req.getConnection(function(err, connection) {
        if (err) return next(err);
        connection.query('SELECT * from products', [], function(err, products) {
            if (err) return next(err);
            res.render('add_purchases', {
                products: products
            });
        });
    });
};

exports.add = function(req, res, next) {
    req.getConnection(function(err, connection) {
        if (err) return next(err);
        var data = {
            prod_id: req.body.prod_id,
            purchase_date: req.body.purchase_date,
            quantity: Number(req.body.quantity),
            cost: req.body.cost
        };

        connection.query('insert into purcahses set ?', data, function(err, results) {
            if (err) return next(err);
            res.redirect('/purchases');
        });
    });
};

exports.get = function(req, res, next) {
    var id = req.params.id;
    req.getConnection(function(err, connection) {
        connection.query('SELECT * FROM products', [id], function(err, products) {
            if (err) return next(err);
            connection.query('SELECT * FROM purcahses WHERE id = ?', [id], function(err, sales) {
                if (err) return next(err);
                // var purchases = purchases[0];
                products = products.map(function(product) {
                    product.selected = product.id === product.prod_id ? "selected" : "";
                    return product;
                });
                res.render('edit_purchases', {
                    products: products,
                    data: purchases
                });
            });
        });
    });
};

exports.update = function(req, res, next) {

    var data = {
        prod_id: req.body.prod_id,
        purchase_date: req.body.purchase_date,
        quantity: Number(req.body.quantity),
        cost:req.body.cost
    };
		// console.log(data);
    var id = req.params.id;
    req.getConnection(function(err, connection) {
        if (err) return next(err);
        connection.query('UPDATE purcahses SET ? WHERE id = ?', [data, id], function(err, rows) {
            if (err) return next(err);
            res.redirect('/purchases');
        });
    });
};
exports.delete = function(req, res, next) {
    var id = req.params.id;
    req.getConnection(function(err, connection) {
        connection.query('DELETE FROM purcahses WHERE id = ?', [id], function(err, rows) {
            if (err) return next(err);
            res.redirect('/purchases');
        });
    });
};
