var express   =     require("express");
var bodyParser  =    require("body-parser");
var app       =     express();
app.use(bodyParser.urlencoded({ extended: false }));
var  session = require('express-session');
  app.use(session({
  secret: '2C44-4D44-WppQ38S',
  resave: true,
  saveUninitialized: true
}));
app.listen(3000,function(){
  console.log("Started on PORT 3000");
})
const route = require('./route');
route(app);
