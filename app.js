
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

var server = http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

///////////////////////////////////////
var io=require('socket.io');
var socket=io.listen(server);
var i=0;

var uzytkownicy = new Array();


socket.on('connection', function (client) {
    
    	i++;
        console.log('Dolaczyl gracz: '+i);
        uzytkownicy[uzytkownicy.length]=client;
        
        client.on('disconnect', function(client){
        	i--;
        	index = uzytkownicy.indexOf(client);
        	uzytkownicy.splice(index,1);
        	console.log(i);
        });

///////////////////////////////////////
    	for(i=0; i<uzytkownicy.length; i++){
    		console.log('uzytkownik: '+uzytkownicy[i].id);
    	}
    	
///////////////////////////////////////        
		if(i==1){
			client.emit('gracz1')
		}
		if(i==2){
			client.emit('gracz2')
		}
		if(i==3){
			client.emit('gracz3')
		}
		if(i==4){
			client.emit('gracz4')
		}
		if(i>4){
			client.emit('za_duzo_graczy')
		}

			
///////////////////////////////////////
		client.on('przegrana',function(){
    		client.broadcast.emit('p');
    	});

///////////////////////////////////////
		socket.on('ruCH', function(data){
			socket.emit('poRuCHu', data);
		});    
    
});
