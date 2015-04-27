var express = require('express');
var app = express();
var port = process.env.PORT || 3030;
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true, limit: '7mb' }));
app.use(bodyParser.json({limit: '5mb'}));
// serve static files in public dir
app.use("/", express.static(__dirname + '/public'));
app.set('view engine', 'ejs'); // set up ejs for templating

// connecting to database
var configDB = require('./config/database.js');
mongoose.connect(configDB.url, {}, function(){
  console.log('Successfully connected to database.');
}); // connect to database and log in console

require('./app/routes/teacher')(app);
require('./app/socket.js')(io);

http.listen(port);
console.log("magic happens on port " + port);
