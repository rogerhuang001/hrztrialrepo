

var http = require('http');
var url = require('url');

http.createServer(function (request, response) {

	var pathname = url.parse(request.url).pathname;
	
	
	// 发送 HTTP 头部 
	// HTTP 状态值: 200 : OK
	// 内容类型: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});

	response.write("you're requesting: "+pathname+"\n"); 
	// 发送响应数据 "Hello World"
	response.end('Hello World\n');
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');





