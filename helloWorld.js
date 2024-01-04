var http = require('http'),
	fs = require('fs');

// Utility function
function serveStaticFile(res, path, contentType, responseCode) {

	if(!responseCode) responseCode = 200; // 200 - OK DEFAULT
	
	// Read the file located in specified path
	fs.readFile(__dirname + path, function(err, data) {
		
		// Complains if it finds any error
		if(err) {
			res.writeHead(500, { 'Content-Type' : 'text/plain' });
			res.end('500 - Internal Error');
		// Sent a responseCode and the data
		}else{
			res.writeHead(responseCode,
				{ 'Content-Type' : contentType });
			res.end(data);
		}
	});
}

http.createServer(function(req, res){
	// Normalize url by removing querystring, optional
	// trailing slash, and making lowercase
	var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
	switch(path) {
		// HOMEPAGE
		case '':
			serveStaticFile(res, '/public/home.html', 'text/html');
			break;
		// ABOUT PAGE
		case '/about':
			serveStaticFile(res, '/public/about.html', 'text/html');
			break;
		// MAIN LOGO
		case '/img/logo.jpg':
			serveStaticFile(res, '/public/img/logo.jpg', 'image/jpeg');
			break;
		// ERROR
		default:
			serveStaticFile(res, '/public/404.html', 'text/html', 404);
			break;
	}
}).listen(3000); // Website can be located at http://localhost:3000/

console.log('Server started on localhost:3000; press Ctrl-C to terminate....');
