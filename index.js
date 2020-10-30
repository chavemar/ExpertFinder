var express = require('express');

var app = express();

var path = require('path');
//Body Parser middleware
var bodyParser = require('body-parser');

var request = require('request');

// var mysql = require('./dbcon.js');

var session = require('express-session');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Handlebars middleware
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', 3000);

//init public folder
app.use(express.static('public'));

//specify route path
// app.use('/api', require('./routes/api/api'));

app.get('/', function(req,res){
    res.render('home');
  });
    

app.use(function(req,res){
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not Found');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.send('500 - Server Error');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
