var socket = io.connect();
var my_id = undefined;
 
var pchly=[];
 
var gracze = {};
 
///////////////////////////////// tablica pchel
for(i=0; i<3;i++){
pchly[i]=new Array(9);
}
 
 
///////////////////////////////// tablica pchel skladowych
for(j=0;j<3;j++){
for(k=0;k<9;k++){
if(k<2){
pchly[j][k]= '<div onmousedown="mDown()" onmouseup='+'rPoz('+k+','+j+')'+ ' id="pchla'+j+k+'" class="pchla'+j+'"></div>';
}else if(k<4){
pchly[j][k]= '<div onmousedown="mDown()" onmouseup='+'rPion('+k+','+j+')'+ ' id="pchla'+j+k+'" class="pchla'+j+'"></div>';
}else if(k<8){
pchly[j][k]= '<div id="pchla'+j+k+'" class="pchla'+j+'"></div>';
}else {
pchly[j][k]= '<div id="pchla'+j+k+'" class="pchla'+j+'"></div>';
}      
}
 
}
 
 
var n;
 
var cp;
var ck;
var czas;
 
var dX=[];
var dY=[];
 
var licznik_pkt=0;
 
 
///////////////////////////////// klikniecie myszy
function mDown(){
 
      cp = +new Date();

}
 
 
///////////////////////////////// odklikniecie myszy z lewej/prawej
function rPoz(dir,n){
 
ck = +new Date();
czas = ck - cp;
 
if(dir===0){
dX[n] += czas;
console.log(dX);
 
if(dX[n] >= 340) dX[n] = 340;
 
if( dX[n] > 150 && dX[n] < 250 && dY[n] > 150 && dY[n] < 250) {
if(n==0)$('.pchla'+n).remove();
if(n==1)$('.pchla'+n).remove();
if(n==2)$('.pchla'+n).remove();
if(n==3)$('.pchla'+n).remove();
if(n==4)$('.pchla'+n).remove();
licznik_pkt++;};
 
if(licznik_pkt == 3){
$('#gamefield').remove();
socket.emit('przegrana');
alert("Wygrales!");
window.location.href='/';
}
 
}
else if (dir===1){
dX[n] -= czas;
console.log(dX);
 
if(dX[n] < 0) dX[n] = 0;
 
if( dX[n] > 150 && dX[n] < 250 && dY[n] > 150 && dY[n] < 250) {
if(n==0)$('.pchla'+n).remove();
if(n==1)$('.pchla'+n).remove();
if(n==2)$('.pchla'+n).remove();
if(n==3)$('.pchla'+n).remove();
if(n==4)$('.pchla'+n).remove();
licznik_pkt++;};
 
if(licznik_pkt == 3){
$('#gamefield').remove();
socket.emit('przegrana');      
alert("Wygrales!");
window.location.href='/';
}
 
}
 
for(i=0;i<9;i++){
$('#pchla'+n+i).animate({
left: dX[n] + 'px'
});
}
 
if(n === 0){
     socket.emit('pozycja_gracza', {id:my_id, x1:dX[n], y1:dY[n]});
     }
     else if(n === 1){
     socket.emit('pozycja_gracza', {id:my_id, x2:dX[n], y2:dY[n]});
     }
     else if(n === 2){
     socket.emit('pozycja_gracza', {id:my_id, x3:dX[n], y3:dY[n]});
     }
 
}
 
 
///////////////////////////////// odklikniecie myszy z gory/dolu
function rPion(dir,n){
 
ck = +new Date();
czas = ck - cp;
 
if(dir===2){
dY[n] += czas;

if(dY[n] >= 340) dY[n] = 340;
 
if( dX[n] > 150 && dX[n] < 250 && dY[n] > 150 && dY[n] < 250) {
if(n==0)$('.pchla'+n).remove();
if(n==1)$('.pchla'+n).remove();
if(n==2)$('.pchla'+n).remove();
if(n==3)$('.pchla'+n).remove();
if(n==4)$('.pchla'+n).remove();
licznik_pkt++;};
 
if(licznik_pkt == 3){
$('#gamefield').remove();      
socket.emit('przegrana');
alert("Wygrales!");
window.location.href='/';
}
 
}
else if (dir===3){
dY[n] -= czas;

if(dY[n] < 0) dY[n] = 0;
console.log(dX[n], dY[n]);
if( dX[n] > 150 && dX[n] < 250 && dY[n] > 150 && dY[n] < 250) {
if(n==0)$('.pchla'+n).remove();
if(n==1)$('.pchla'+n).remove();
if(n==2)$('.pchla'+n).remove();
if(n==3)$('.pchla'+n).remove();
if(n==4)$('.pchla'+n).remove();
licznik_pkt++;};
 
 
if(licznik_pkt == 3){
$('#gamefield').remove();
socket.emit('przegrana');
alert("Wygrales!");
window.location.href='/';
}
 
}
 
 
for(i=0;i<9;i++){
$('#pchla'+n+i).animate({
top: dY[n] + 'px'
});
}
    if(n === 0){
     socket.emit('pozycja_gracza', {id:my_id, x1:dX[n], y1:dY[n]});
     }
    else if(n === 1){
     socket.emit('pozycja_gracza', {id:my_id, x2:dX[n], y2:dY[n]});
     }
    else if(n === 2){
     socket.emit('pozycja_gracza', {id:my_id, x3:dX[n], y3:dY[n]});
     }
 
}
 
///////////////////////////////// po zaladowaniu dokumentu
$(document).ready(function () {
 
$('#pole_gry').append('<div id ="gamefield"></div>');
 
$('#gamefield').append(pchly[0][4]);
$('#gamefield').append(pchly[0][2]);
$('#gamefield').append(pchly[0][5] + '<br / >');
 
$('#gamefield').append(pchly[0][0]);
$('#gamefield').append(pchly[0][8]);
$('#gamefield').append(pchly[0][1] + '<br / >');
 
$('#gamefield').append(pchly[0][6]);
$('#gamefield').append(pchly[0][3]);
$('#gamefield').append(pchly[0][7] + '<br / >');
 
$('#gamefield').append(pchly[1][4]);
$('#gamefield').append(pchly[1][2]);
$('#gamefield').append(pchly[1][5] + '<br / >');
 
$('#gamefield').append(pchly[1][0]);
$('#gamefield').append(pchly[1][8]);
$('#gamefield').append(pchly[1][1] + '<br / >');
 
$('#gamefield').append(pchly[1][6]);
$('#gamefield').append(pchly[1][3]);
$('#gamefield').append(pchly[1][7] + '<br / >');
 
 
$('#gamefield').append(pchly[2][4]);
$('#gamefield').append(pchly[2][2]);
$('#gamefield').append(pchly[2][5] + '<br / >');
 
$('#gamefield').append(pchly[2][0]);
$('#gamefield').append(pchly[2][8]);
$('#gamefield').append(pchly[2][1] + '<br / >');
 
$('#gamefield').append(pchly[2][6]);
$('#gamefield').append(pchly[2][3]);
$('#gamefield').append(pchly[2][7] + '<br / >');
 
 
 
    socket.on('connect', function(socket){
    });
   
    socket.on('witaj_graczu', function(data){
        if (my_id == undefined){
            my_id = data.id;
            var color = data.color;
            wsp = pozycjaLosowa(0);
            wsp1 = pozycjaLosowa(1);
            wsp2 = pozycjaLosowa(2);
            $('.pchla0').css({"backgroundColor":color});
            $('.pchla1').css({"backgroundColor":color});
            $('.pchla2').css({"backgroundColor":color});
            gracze[data.id]=color;
            socket.emit('pozycja_gracza', { id:my_id, x1:wsp[0], y1:wsp[1]});
            socket.emit('pozycja_gracza', { id:my_id, x2:wsp1[0], y2:wsp1[1]});
            socket.emit('pozycja_gracza', { id:my_id, x3:wsp2[0], y3:wsp2[1]});
        }
    });
   
    socket.on('nowa_pozycja', function(data) {
        console.log(data);
        if(data.y1 !== undefined){
         $('#'+data.id+'p1').animate({top:data.y1+'px'}).animate({left:data.x1+'px'});
         }
        else if(data.y2 !== undefined){
         $('#'+data.id+'p2').animate({top:data.y2+'px'}).animate({left:data.x2+'px'});
         }
        else if(data.y3 !== undefined){
         $('#'+data.id+'p3').animate({top:data.y3+'px'}).animate({left:data.x3+'px'});
         }
       
    });
 
 /*socket.on('usun_pchelke', function(data) {
        console.log(data);
        if(data.y1 !== undefined){
         $('#'+data.id+'p1').animate({top:data.y1+'px'}).animate({left:data.x1+'px'});
         }
        else if(data.y2 !== undefined){
         $('#'+data.id+'p2').animate({top:data.y2+'px'}).animate({left:data.x2+'px'});
         }
        else if(data.y3 !== undefined){
         $('#'+data.id+'p3').animate({top:data.y3+'px'}).animate({left:data.x3+'px'});
         }
       
    });*/
 
 
    socket.on('obecni_gracze', function(data) {
        console.log(data);
        for(var id in data) {
            console.log(id);
            gracz = data[id];
            console.log(gracz);
            if (gracze[id] == undefined){
                gracze[id] = gracz.color;
                $('#gamefield').append('<div id="'+id+'p1" style="width:45px;height:45px;background-color:'+gracz.color+'"></div>');
                $('#gamefield').append('<div id="'+id+'p2" style="width:45px;height:45px;background-color:'+gracz.color+'"></div>');
                $('#gamefield').append('<div id="'+id+'p3" style="width:45px;height:45px;background-color:'+gracz.color+'"></div>');
              $('#'+id+'p1').animate({top:gracz.y1+'px'}).animate({left:gracz.x1+'px'});
              $('#'+id+'p2').animate({top:gracz.y2+'px'}).animate({left:gracz.x2+'px'});
              $('#'+id+'p3').animate({top:gracz.y3+'px'}).animate({left:gracz.x3+'px'});
             
             
            }
        }
    });
 
socket.on('za_duzo_graczy', function(){
$('#pole_gry').remove();
alert('Za duzo graczy... poczekaj, albo zagraj single palyer');
window.location.href='/';
});
 
 
socket.on('p',function(){
alert('Przegrales...');
window.location.href='/';
});
 
 
socket.on('poRuCHu', function(data){
console.log(pchly);
$('#gamefield').append(pchly[0][4]);
$('#gamefield').append(pchly[0][2]);
$('#gamefield').append(pchly[0][5] + '<br / >');
 
$('#gamefield').append(pchly[0][0]);
$('#gamefield').append(pchly[0][8]);
$('#gamefield').append(pchly[0][1] + '<br / >');
 
$('#gamefield').append(pchly[0][6]);
$('#gamefield').append(pchly[0][3]);
$('#gamefield').append(pchly[0][7] + '<br / >');
 
$('#gamefield').append(pchly[1][4]);
$('#gamefield').append(pchly[1][2]);
$('#gamefield').append(pchly[1][5] + '<br / >');
 
$('#gamefield').append(pchly[1][0]);
$('#gamefield').append(pchly[1][8]);
$('#gamefield').append(pchly[1][1] + '<br / >');
 
$('#gamefield').append(pchly[1][6]);
$('#gamefield').append(pchly[1][3]);
$('#gamefield').append(pchly[1][7] + '<br / >');
 
 
$('#gamefield').append(pchly[2][4]);
$('#gamefield').append(pchly[2][2]);
$('#gamefield').append(pchly[2][5] + '<br / >');
 
$('#gamefield').append(pchly[2][0]);
$('#gamefield').append(pchly[2][8]);
$('#gamefield').append(pchly[2][1] + '<br / >');
 
$('#gamefield').append(pchly[2][6]);
$('#gamefield').append(pchly[2][3]);
$('#gamefield').append(pchly[2][7] + '<br / >');
 
 
 
for(i=0;i<9;i++){
$('#pchla'+n+i).animate({ top: dY + 'px'});
$('#pchla'+n+i).animate({ left: dX + 'px'});
}
 
});
 
});
 
///////////////////////////////// losowanie pozycji
function pozycjaLosowa(n){
 
var rN=Math.floor(Math.random()*350);
var pos=Math.floor(rN/50)*50;
var pos1=Math.floor(rN/50)*50;
 
 
//wyklucz pos pudelka
if(pos >= 150 && pos <= 200) pos +=100;
if(pos1 >= 150 && pos <= 200) pos1 +=100;
 
ustawPozycje(n,pos1,pos);
dX[n]=pos1;
dY[n]=pos;
 
    return [dX[n],dY[n]]
 
}
 
///////////////////////////////// ustawienie na pozycji
function ustawPozycje(n,x,y){
for(i=0;i<9;i++){
$('#pchla'+n+i).animate({ top: y + 'px'});
$('#pchla'+n+i).animate({ left: x + 'px'});
}
}