var socket = io.connect();
var my_id = undefined;

var pchly=new Array(5);

var gracze = {};

///////////////////////////////// tablica pchel
for(i=0; i<3;i++){
	pchly[i]=new Array(9);
}


///////////////////////////////// tablica pchel skladowych
for(j=0;j<3;j++){
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
						
				if(licznik_pkt == 3){
					$('#gamefield').remove();
					socket.emit('przegrana');
					alert("Wygrales!");
					window.location.href='/';
				}
				
		}
		else if (dir===1){
			dX[n] -= 50;
			console.log(dX);
	
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
    socket.emit('pozycja_gracza', {id:my_id, x:dX[0], y:dY[0]});
    socket.emit('pozycja_gracza', {id:my_id, x:dX[1], y:dY[1]});
    socket.emit('pozycja_gracza', {id:my_id, x:dX[2], y:dY[2]});

}


///////////////////////////////// odklikniecie myszy z gory/dolu
function rPion(dir,n){

		if(dir===2){
			dY[n] += 50;
	//socket.emit('pozycja_gracza', socket.id, dX[n], dY[n]);
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
					
				if(licznik_pkt == 3){
				$('#gamefield').remove();									           
				    socket.emit('przegrana');
					alert("Wygrales!");
					window.location.href='/';
				}
				
		}
		else if (dir===3){
			dY[n] -= 50;
	//socket.emit('pozycja_gracza', socekt.id, dX[n], dY[n]);
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
    socket.emit('pozycja_gracza', {id:my_id, x:dX[0], y:dY[0]});
    socket.emit('pozycja_gracza', {id:my_id, x:dX[1], y:dY[1]});
    socket.emit('pozycja_gracza', {id:my_id, x:dX[2], y:dY[2]});

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
            socket.emit('pozycja_gracza', { id:my_id, x:wsp[0], y:wsp[1]});
            socket.emit('pozycja_gracza', { id:my_id, x:wsp1[0], y:wsp1[1]});
            socket.emit('pozycja_gracza', { id:my_id, x:wsp2[0], y:wsp2[1]});
        }
    });
    
    socket.on('nowa_pozycja', function(data) {
        console.log(data);
        $('#'+data.id).animate({top:data.y+'px'}).animate({left:data.x+'px'});
        
    });


    socket.on('obecni_gracze', function(data) {
        console.log(data);
        for(var id in data) {
            console.log(id);
            gracz = data[id];
            console.log(gracz);
            if (gracze[id] == undefined){
                gracze[id] = gracz.color;
                $('#gamefield').append('<div id="'+id+'"     style="width:45px;height:45px;background-color:'+gracz.color+'"></div>');
              $('#'+id).animate({top:gracz.y+'px'}).animate({left:gracz.x+'px'});
             
              
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
	
    return [dX,dY]

}

///////////////////////////////// ustawienie na pozycji
function ustawPozycje(n,x,y){
	for(i=0;i<9;i++){
		$('#pchla'+n+i).animate({ top: y + 'px'});
		$('#pchla'+n+i).animate({ left: x + 'px'});
	}
}