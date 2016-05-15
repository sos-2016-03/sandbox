var express = require("express");
var bodyParser = require("body-parser");
var governify = require("governify");

var app = express();
governify.control(app,{
  datastore :"http://datastore.governify.io/api/v6.1/",
  namespace :"sos-2016-03-group",
  defaultPath: "/group"
});
var port = (process.env.PORT || 12000);

app.use(bodyParser.json());

app.get("/group/names", (req, res)=>{
  res.send([
    {name: "Patricia González Sevilla"},
    {name: "Ana Salas Urbano"},
    {name: "ALberto Jesús Rodríguez Pulido"}
    ])
})

app.listen(port, ()=>{
	console.log("Listening on port: " + port);
})
