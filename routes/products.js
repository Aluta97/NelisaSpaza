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
