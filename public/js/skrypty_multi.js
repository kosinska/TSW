var socket;

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

socket=io.connect(window.location.hostname);

	socket.on('gracz1', function(){
		$('.pchla0').css({"backgroundColor":"#EE6363"});
		socket.emit('pozycja');
	});
	
	socket.on('gracz2', function(){
		$('.pchla0').css({"backgroundColor":"#CAE1FF"});
		socket.emit('pozycja');
	});
	
	socket.on('gracz3', function(){
		$('.pchla0').css({"backgroundColor":"green"});
		socket.emit('pozycja');
	});
	
	socket.on('gracz4', function(){
		$('.pchla0').css({"backgroundColor":"#CD6090"});
		socket.emit('pozycja');
	});
	
	socket.on('za_duzo_graczy', function(){
		$('#pole_gry').remove();
		alert('Za duzo graczy... poczekaj, albo zagraj single palyer');
		window.location.href='/';
	});

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
	
	var pozycja_pchly=pozycjaLosowa(0);
	
	socket.on('pozy', function(){
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

	});
	
	socket.on('p',function(){
		alert('przegrales');
		window.location.href='/';
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

}

///////////////////////////////// ustawienie na pozycji
function ustawPozycje(n,x,y){

	for(i=0;i<9;i++){
		$('#pchla'+n+i).animate({ top: y + 'px'});
		$('#pchla'+n+i).animate({ left: x + 'px'});
	}

}

