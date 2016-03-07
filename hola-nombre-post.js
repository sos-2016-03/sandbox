var express = require("express");
var app = express();
var nombre="Patricia";

var port = (process.env.PORT || 13000);

app.post("/",(req,res)=>{
	res.write("Hola " + nombre);
	res.end();
});

app.listen(port);