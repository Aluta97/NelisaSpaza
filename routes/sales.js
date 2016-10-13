exports.show = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) return next(err);
    connection.query('SELECT sales.id as sales_id, products.description, sales.quantity, sales.selling_date, sales.selling_prices FROM sales inner join products on sales.prod_id = products.id ORDER BY sales.id DESC', [], function(err, results) {
        	if (err) return next(err);
    		res.render( 'sales', {
					sales : results,
    		});
      	});
	});
};

exports.showAdd = function(req, res) {
    req.getConnection(function(err, connection) {
        if (err) return next(err);
        connection.query('SELECT * from products', [], function(err, products) {
            if (err) return next(err);
            res.render('add_sales', {
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
            selling_date: req.body.selling_date,
            quantity: Number(req.body.quantity),
            selling_prices: req.body.selling_prices
        };

        connection.query('insert into sales set ?', data, function(err, results) {
            if (err) return next(err);
            res.redirect('/sales');
        });
    });
};

exports.get = function(req, res, next) {
    var id = req.params.id;
		// console.log(id);
    req.getConnection(function(err, connection) {
        connection.query('SELECT * FROM products', [id], function(err, products) {
            if (err) return next(err);
            connection.query('SELECT * FROM sales WHERE id = ?', [id], function(err, sales) {
                if (err) return next(err);
                var sales = sales[0];
                products = products.map(function(product) {
                    product.selected = product.id === product.prod_id ? "selected" : "";
                    return product;
                });
                res.render('edit_sales', {
                    products: products,
                    data: sales
                });
            });
        });
    });
};


exports.update = function(req, res, next) {

    var data = {
        prod_id: req.body.prod_id,
        selling_date: req.body.selling_date,
        quantity: Number(req.body.quantity),
        selling_prices:req.body.selling_prices
    };
		// console.log(data);
    var id = req.params.id;
    req.getConnection(function(err, connection) {
        if (err) return next(err);
        connection.query('UPDATE sales SET ? WHERE id = ?', [data, id], function(err, rows) {
            if (err) return next(err);
            res.redirect('/sales');
        });
    });
};


exports.delete = function(req, res, next) {
    var id = req.params.id;
    req.getConnection(function(err, connection) {
        connection.query('DELETE FROM sales WHERE id = ?', [id], function(err, rows) {
            if (err) return next(err);
            res.redirect('/sales');
        });
    });
};
