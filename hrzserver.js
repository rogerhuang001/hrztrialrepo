var express = require('express');
var app = express();
var fs = require("fs");

var jsonfile;

fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
	if (err) {
	console.log("error in reading in file");
	
	} else {
	jsonfile=JSON.parse(data);
	console.log( data );
	}
   });

app.get('/list', function (req, res) {
       console.log( JSON.stringify(jsonfile)  );
       res.end( JSON.stringify(jsonfile) );
})
app.get('/:id', function (req, res) {
   // 首先我们读取已存在的用户
       var user = jsonfile["user" + req.params.id]
       console.log( user );
       res.end( JSON.stringify(user));
})

app.get('/delete/:id', function (req, res) {

   // First read existing users.
       delete jsonfile["user" + req.params.id];

       console.log( JSON.stringify(jsonfile) );
       res.end( JSON.stringify(jsonfile));
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})

