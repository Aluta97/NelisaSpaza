exports.show = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) return next(err);
    connection.query('SELECT sales.id as sales_id, products.description, sales.quantity, sales.selling_date, sales.selling_prices FROM sales inner join products on sales.prod_id = products.id ORDER BY sales.id ASC', [], function(err, results) {
        	if (err) return next(err);
    		res.render( 'sales', {
					sales : results,
    		});
      	});
	});
};
