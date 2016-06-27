var fs = require('fs');
var handlebars = require('handlebars');
var mostPopularProd = require('./mostPopularProd');

var source = fs.readFileSync(filepath, 'utf8');
