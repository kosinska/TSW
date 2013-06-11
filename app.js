
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

var uzytkownicy = {};
var dostepne_kolory = ['red','blue','black','white','pink','grey','green','yellow'];

console.log(uzytkownicy);

socket.on('connection', function (client) {

    if (i < dostepne_kolory.length){
        var color = dostepne_kolory[i];
        uzytkownicy[client.id] = { x:0, y:0, color:color };
       uzytkownicy[client.id] = { x:1, y:1, color:color };
       uzytkownicy[client.id] = { x:2, y:2, color:color };
       
       
        client.emit('witaj_graczu', { id: client.id, color: color });
        client.emit('obecni_gracze', uzytkownicy);
        client.broadcast.emit('obecni_gracze', uzytkownicy);
    }else{
        client.emit('za_duzo_graczy');
    }
    
	i++;
    console.log('Dolaczyl gracz: '+i);
    
///////////////////////////////////////

    client.on('disconnect', function(){
        i--;
        delete uzytkownicy[client.id];
        console.log(i);
    });

	client.on('przegrana',function(){
		client.broadcast.emit('p');
   	});

///////////////////////////////////////
	client.on('ruCH', function(data){
//		client.emit('poRuCHu', data);
//		console.log(data);
	});    

	
    client.on('pozycja_gracza', function(data) {
      if (uzytkownicy[data.id] == undefined){
        console.log('niepoprawne id:',data.id);
        return;
      }
      uzytkownicy[data.id].x = data.x;
      uzytkownicy[data.id].y = data.y;
      client.broadcast.emit('nowa_pozycja', { id:data.id, x:data.x, y:data.y });
      
      
    });

});


