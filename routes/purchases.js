exports.show = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) return next(err);
		connection.query('SELECT * from purcahses', [], function(err, results) {
        	if (err) return next(err);
    		res.render( 'purchases', {
					no_products : results.length === 0,
					purchases : results,
    		});
      	});
	});
};
