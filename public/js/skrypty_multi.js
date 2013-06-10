var socket = io.connect();
socket.on('connect', function(){
	socket.emit('pobierz_dane');
});

var pchly=new Array(5);


///////////////////////////////// tablica pchel
for(i=0; i<1;i++){
	pchly[i]=new Array(9);
}


///////////////////////////////// tablica pchel skladowych
for(j=0;j<1;j++){
	for(k=0;k<9;k++){
		if(k<2){
			pchly[j][k]= '<div onmouseup='+'rPoz('+k+','+j+')'+ ' id="pchla'+j+k+'" class="pchla'+j+'"></div>';
		}else if(k<4){
			pchly[j][k]= '<div onmouseup='+'rPion('+k+','+j+')'+ ' id="pchla'+j+k+'" class="pchla'+j+'"></div>';
		}else if(k<8){
			pchly[j][k]= '<div id="pchla'+j+k+'" class="pchla'+j+'"></div>';
		}else {
			pchly[j][k]= '<div id="pchla'+j+k+'" class="pchla'+j+'"></div>';
		}	
	}

}


var n;

var dX=new Array();
var dY=new Array();

var licznik_pkt=0;


///////////////////////////////// odklikniecie myszy z lewej/prawej
function rPoz(dir,n){
	
		if(dir===0){
			dX[n] += 50;
			console.log(dX);
	socket.emit('pozycja_gracza', socket.id, dX[n], dY[n]);
				if(dX[n] >= 340) dX[n] = 340;
				
				if( dX[n] == 150 && dY[n] == 150 ) {
					if(n==0)$('.pchla'+n).remove();
					if(n==1)$('.pchla'+n).remove();
					if(n==2)$('.pchla'+n).remove();
					if(n==3)$('.pchla'+n).remove();
					if(n==4)$('.pchla'+n).remove();
					licznik_pkt++;};
					
				if( dX[n] == 150 && dY[n] == 200 ) {
					if(n==0)$('.pchla'+n).remove();
					if(n==1)$('.pchla'+n).remove();
					if(n==2)$('.pchla'+n).remove();
					if(n==3)$('.pchla'+n).remove();
					if(n==4)$('.pchla'+n).remove();
					licznik_pkt++;};
						
				if(licznik_pkt == 1){
					$('#gamefield').remove();
					socket.emit('przegrana');
					alert("Wygrales!");
					window.location.href='/';
				}
				
		}
		else if (dir===1){
			dX[n] -= 50;
			console.log(dX);
	socket.emit('pozycja_gracza', socket.id, dX[n], dY[n]);
				if(dX[n] < 0) dX[n] = 0;
				
				if( dX[n] == 200 && dY[n] == 150 ) {
					if(n==0)$('.pchla'+n).remove();
					if(n==1)$('.pchla'+n).remove();
					if(n==2)$('.pchla'+n).remove();
					if(n==3)$('.pchla'+n).remove();
					if(n==4)$('.pchla'+n).remove();
					licznik_pkt++;};
					
				if( dX[n] == 200 && dY[n] == 200 ) {
					if(n==0)$('.pchla'+n).remove();
					if(n==1)$('.pchla'+n).remove();if(n==2)$('.pchla'+n).remove();
					if(n==3)$('.pchla'+n).remove();
					if(n==4)$('.pchla'+n).remove();
					licznik_pkt++;};
					
				if(licznik_pkt == 1){
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

}


///////////////////////////////// odklikniecie myszy z gory/dolu
function rPion(dir,n){

		if(dir===2){
			dY[n] += 50;
	socket.emit('pozycja_gracza', socket.id, dX[n], dY[n]);
				if(dY[n] >= 340) dY[n] = 340;
				
				if( dX[n] == 150 && dY[n] == 150 ) {
					if(n==0)$('.pchla'+n).remove();
					if(n==1)$('.pchla'+n).remove();
					if(n==2)$('.pchla'+n).remove();
					if(n==3)$('.pchla'+n).remove();
					if(n==4)$('.pchla'+n).remove();
					licznik_pkt++;};
					
				if( dX[n] == 200 && dY[n] == 150 ) {
					if(n==0)$('.pchla'+n).remove();
					if(n==1)$('.pchla'+n).remove();
					if(n==2)$('.pchla'+n).remove();
					if(n==3)$('.pchla'+n).remove();
					if(n==4)$('.pchla'+n).remove();
					licznik_pkt++;};
					
				if(licznik_pkt == 1){
				$('#gamefield').remove();									           
				    socket.emit('przegrana');
					alert("Wygrales!");
					window.location.href='/';
				}
				
		}
		else if (dir===3){
			dY[n] -= 50;
	socket.emit('pozycja_gracza', socekt.id, dX[n], dY[n]);
				if(dY[n] < 0) dY[n] = 0;
				
				if( dX[n] == 150 && dY[n] == 200 ) {
					if(n==0)$('.pchla'+n).remove();
					if(n==1)$('.pchla'+n).remove();
					if(n==2)$('.pchla'+n).remove();
					if(n==3)$('.pchla'+n).remove();
					if(n==4)$('.pchla'+n).remove();
					licznik_pkt++;};
					
				if( dX[n] == 200 && dY[n] == 200 ) {
					if(n==0)$('.pchla'+n).remove();
					if(n==1)$('.pchla'+n).remove();
					if(n==2)$('.pchla'+n).remove();
					if(n==3)$('.pchla'+n).remove();
					if(n==4)$('.pchla'+n).remove();
					licznik_pkt++;};
				
				if(licznik_pkt == 1){
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
	pozycjaLosowa(0);

	socket.on('gracz1', function(){
		$('.pchla0').css({"backgroundColor":"#EE6363"});

	});
	
	socket.on('gracz2', function(){
		$('.pchla0').css({"backgroundColor":"#CAE1FF"});
		
	});
	
	socket.on('gracz3', function(){
		$('.pchla0').css({"backgroundColor":"green"});
		
	});
	
	socket.on('gracz4', function(){
		$('.pchla0').css({"backgroundColor":"#CD6090"});
		
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
	
socket.emit('pozycja_gracza', socket.id, pos1, pos);

}

socket.on('nowa_pozycja', function(data) {
  console.log(data);
  if($('#'+data.id).length !== 0) {
    $('#'+data.id).animate({top:data.y+'px'}).animate({left:data.x+'px'});
  } else {
    $('#gamefield').append('<div id="'+data.id+'" style="width:45px;height:45px;background-color:'+data.color+'"></div>');
  }
});

socket.on('obecni_gracze', function(data) {
  for(var i in data.gracze) {
    gracz = data.gracze[i];
    console.log(gracz[0] + ' ' + data.ja);
    if(gracz[0] !== data.ja) {
      $('#gamefield').append('<div id="'+gracz[0]+'" style="width:45px;height:45px;background-color:'+gracz[3]+'"></div>');
      $('#'+gracz[0]).animate({top:gracz[1]+'px'}).animate({left:gracz[2]+'px'});
    }
  }
});

///////////////////////////////// ustawienie na pozycji
function ustawPozycje(n,x,y){

	for(i=0;i<9;i++){
		$('#pchla'+n+i).animate({ top: y + 'px'});
		$('#pchla'+n+i).animate({ left: x + 'px'});
	}
socket.emit('pozycja_gracza', socket.id, x, y);
}