function route(handle, pathname, responese, postData) {
	console.log("about to route a request for" + pathname);
	if(typeof handle[pathname] === 'function'){
		handle[pathname](responese, postData);
	} else {
		console.log("no request handle for"+pathname)
		responese.writeHead(404, {"Content-Type": "text/plain"});
	    responese.write("404 Not found");
	    responese.end();
	}
}

exports.route = route;