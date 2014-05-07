var express = require('express');
var app = express();

var locationsArray = ['seville', 'canary_islands', 'cape_verde', 'strait_of_magellan', 'guam', 'phillipines'];
var location;

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
	res.render('seville', {locations: locationsArray});
});

app.get('/canary_islands', function(req, res){
	res.render('canary_islands');
});

app.get('/cape_verde', function(req, res){
	res.render('cape_verde');
});

app.get('/strait_of_magellan', function(req, res){
	res.render('strait_of_magellan');
});

app.get('/guam', function(req, res){
	res.render('guam');
});

app.get('/phillipines', function(req, res){
	res.render('phillipines');
});

app.get('/unknown', function(req, res) {
	res.render('unknown', {unknownLocation: location});
});

app.get('/:unknownLocation', function(req, res) {
	location = req.params.unknownLocation;
	res.redirect('/unknown');
});



var server = app.listen(7582, function() {
	console.log('Express server listening on port ' + server.address().port);
});
