var http = require('http');
var url = require('url');

function start(route,handle) {
	http.createServer( ( request, response) => {
 		var postData = '';
		var pathname = url.parse(request.url).pathname;
		console.log(pathname)
		request.setEncoding("utf8");
		// 绑定data事件 获取完整的post数据
		request.addListener("data", function(postDataChunk) {
	      postData += postDataChunk;
	      console.log("Received POST data chunk '"+
	      postDataChunk + "'.");
	    });
		// 绑定end事件 在获取到完整的post数据之后执行
	    request.addListener("end", function() {
	      route(handle, pathname, response, postData);
	    });


 		// route( handle, pathname, response);

		// res.writeHead(200,{ 'Content-Type':'text/plain'});
		// var content = route(handle,pathname);
		// res.write(content);
		// res.end();
	}).listen(8888);
}
exports.start = start;
