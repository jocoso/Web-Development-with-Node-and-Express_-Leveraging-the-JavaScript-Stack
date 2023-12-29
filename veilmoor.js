var express = require('express');
var app = express();

// Set up handlebars view engine
// Creates a view engine and configures Express 
// to use it by default.
var handlebars = require('express3-handlebars')
// defaultLayout: 'main' means that, unless we specify otherwise,
// this is the layout that will be used for any view.
		.create({ defaultLayout: 'main' });
	app.engine('handlebars', handlebars.engine);
	app.set('view engine', 'handlebars');

// The port will either be specified in a .env file or
// will be set to 3000 by default
app.set('port', process.env.PORT || 3000);

// Designates root/public as the static directory
// creates a route for each static file we want to
// deliver that renders a file and returns it to the client
app.use(express.static(__dirname + '/public'));

var fortunes = [
	"In the corner of your eyes you see an old woman staring at you",
	"Your body is heavy. You feel like killing",
	"The mark burns your skin. You lose a point of health",
	"You hear a voice next to your ear. It tells you to visit the cementery."
];

// Both functions return plaintext with a status code of 200 (OK)
// 200 is app.get's default status code and doesn't have to be specified.
app.get('/', function(req, res) {
	res.render('home');
});

app.get('/about', function(req, res) {
	var randomFortune = fortunes[
		Math.floor(Math.random() * fortunes.length)
	];
	res.render('about', { fortune: randomFortune });
});

// Custom 404 (Not Found) page
// The following funciton will be executed
// for every request to the app
app.use(function(req, res) {
	res.type('text/plain');
	res.status(404);
	res.send('404 - Not Found');
});

// Custom 500 (Internal Server Error) page
app.use(function(err, req, res, next) {
	console.error(err.stack);
	res.type('text/plain');
	res.status(500);
	res.send('500 - Server Error');
});

// Listen to the connections in the port -> 3000
// port is 3000 because .env file hasn't be created yet.
app.listen(app.get('port'), function() {
	console.log('Express started on http://localhost:' +
		app.get('port') + '; press Ctrl-C to terminate.');
});
