//======================================================================
var express = require('express');
var app = express(); 	
var port = process.env.PORT || 8080; // set the port
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// set the files location
app.use(express.static('./client')); 
// http log every request to the console
//app.use(morgan('dev')); 

// start app with node server.js
app.listen(port);
console.log("App listening on port " + port);
