var express = require("express");
var bodyParser = require("body-parser");
var governify = require("governify");

var app = express();
app.use(bodyParser.json());

governify.control(app,{
  datastore :"http://datastore.governify.io/api/v6.1/",
  namespace :"sos-2016-03-group",
  defaultPath: "/group/names"
});



app.get("/group/names", (req, res)=>{
  res.send([
    {name: "Patricia González Sevilla"},
    {name: "Ana Salas Urbano"},
    {name: "Alberto Jesús Rodríguez Pulido"}
    ])
});

app.use('/',express.static(__dirname + '/public'));

var port = (process.env.PORT || 10000);

app.listen(port, ()=>{
	console.log("Listening on port: " + port);
});
