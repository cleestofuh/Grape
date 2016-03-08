
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var index2 = require('./routes/index2');
var challenge = require('./routes/challenge');
var data = require('./routes/data');
var streak = require('./routes/streak');
var reflection = require('./routes/reflection');
var reflection2 = require('./routes/reflection2');

// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/index2', index2.view);
app.get('/challenge', challenge.giveChallenge);
app.get('/data', data.giveData);
app.get('/streak', streak.giveStreak);

app.post('/data', data.projectInfo);
app.post('/dataDelete', data.deleteKinder);

app.get('/reflection', reflection.view);
app.get('/data/json', data.dataInfo)
app.get('/reflection2', reflection2.view2);


// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
