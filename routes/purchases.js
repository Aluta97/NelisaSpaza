exports.show = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) return next(err);
    connection.query('SELECT purcahses.id as purcahses_id, products.description, purcahses.quantity, purcahses.purchase_date, purcahses.cost FROM purcahses inner join products on purcahses.prod_id = products.id ORDER BY purcahses.id ASC', [], function(err, results) {
        	if (err) return next(err);
    		res.render( 'purchases', {
					purchases : results,
    		});
      	});
	});
};
