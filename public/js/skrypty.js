$(document).ready(function () {


});

var pozycja =0;
var pozycja2 =0;

//var kolory_powrot=['#EE6363','#CAE1FF','yellow','white','green'];
//var kolory_klik=['#e93535','#B0C4DE','grey','grey','grey'];

var pchly=new Array(5);


///////////////////////////////// tablica pchel
for(i=0; i<5;i++){
	pchly[i]=new Array(9);
}

///////////////////////////////// tablica pchel skladowych
for(j=0;j<5;j++){
	for(k=0;k<9;k++){
		if(k<2){
			pchly[j][k]='<div onmousedown="myszDol()" onmouseup='+'rPoz('+k+','+j+')'+ ' id="pchla'+j+k+'" class="pchla'+j+'"></div>';
		}else if(k<4){
			pchly[j][k]='<div onmousedown="myszDol()" onmouseup='+'rPion('+k+','+j+')'+ ' id="pchla'+j+k+'" class="pchla'+j+'"></div>';
		}else if(k<8){
			pchly[j][k]= '<div onmousedown="myszDol()" id="pchla'+j+k+'" class="pchla'+j+'"></div>';
		}else {
			pchly[j][k]= '<div id="pchla'+j+k+'" class="pchla'+j+'"></div>';
		}	
	}

}


var n;

var dX=new Array();
var dY=new Array();

var licznik_pkt=0;

$(document).ready(function() {
  $('body').append('<div id="zegarek"></div>');
});


var licznik = new odliczanie({  
    sekundy: 40,
    onUpdateStatus: function(sec){console.log(sec); $('#zegarek').html("<p>Czas: "+sec + "</p>");}, //$('#zegar').children().remove();
    onCounterEnd: function(){if(licznik_pkt != 5){ alert('Czas się skończył! Przegrałeś :(');
							window.location.href='/';}}
});

///////////////////////////////// odliczanie czasu
function odliczanie(options) {
  var timer,
  instance = this,
  sekundy = options.sekundy || 10,
  updateStatus = options.onUpdateStatus || function () {},
  counterEnd = options.onCounterEnd || function () {};

  function zmiejszLicznik() {
    updateStatus(sekundy);
   
    if (sekundy <=5 ) $('#body').css( "background-color", "#FF6A6A")
    if (sekundy <=4 ) $('#body').css( "background-color", "#FDF5E6")
    if (sekundy <=3 ) $('#body').css( "background-color", "#FF6A6A")
    if (sekundy <=2 ) $('#body').css( "background-color", "#FDF5E6")
    if (sekundy <=1 ) $('#body').css( "background-color", "#FF6A6A")
    if (sekundy === 0) {
      counterEnd();
      instance.stop();
    }
    sekundy--;
     
   
  }

  this.start = function () {
    clearInterval(timer);
    timer = 0;
    sekundy = options.sekundy;
    timer = setInterval(zmiejszLicznik, 1000);
  };

  this.stop = function () {
    clearInterval(timer);
  };
}

///////////////////////////////// klikniecie myszy
function myszDol(){

	/*for(i=0;i<9;i++){
		$('#pchla'+n+i).css( 'background-color', "grey") //kolory_klik[n]
	}*/
	
}

///////////////////////////////// odklikniecie myszy z lewej/prawej
function rPoz(dir,n){
	
		if(dir===0){
			dX[n] += 50;
				if(dX[n] >= 340) dX[n] = 340;
				
				if( dX[n] >= 150 && dY[n] == 150 ) {
					if(n==0)$('.pchla'+n).remove();
					if(n==1)$('.pchla'+n).remove();
					if(n==2)$('.pchla'+n).remove();
					if(n==3)$('.pchla'+n).remove();
					if(n==4)$('.pchla'+n).remove();
					licznik_pkt++;};
					
				if( dX[n] >= 150 && dY[n] == 200 ) {
					if(n==0)$('.pchla'+n).remove();
					if(n==1)$('.pchla'+n).remove();
					if(n==2)$('.pchla'+n).remove();
					if(n==3)$('.pchla'+n).remove();
					if(n==4)$('.pchla'+n).remove();
					licznik_pkt++;};
						
				if(licznik_pkt == 5){
					$('#gamefield').remove();
					alert("Wygrales!");
					window.location.href='/';
				} 
		}
		else if (dir===1){
			dX[n] -= 50;
				if(dX[n] < 0) dX[n] = 0;
				
				if( dX[n] <= 200 && dY[n] == 150 ) {
					if(n==0)$('.pchla'+n).remove();
					if(n==1)$('.pchla'+n).remove();
					if(n==2)$('.pchla'+n).remove();
					if(n==3)$('.pchla'+n).remove();
					if(n==4)$('.pchla'+n).remove();
					licznik_pkt++;};
					
				if( dX[n] <= 200 && dY[n] == 200 ) {
					if(n==0)$('.pchla'+n).remove();
					if(n==1)$('.pchla'+n).remove();if(n==2)$('.pchla'+n).remove();
					if(n==3)$('.pchla'+n).remove();
					if(n==4)$('.pchla'+n).remove();
					licznik_pkt++;};
					
				if(licznik_pkt == 5){
					$('#gamefield').remove();
					alert("Wygrales!");
					window.location.href='/';
				}
		}

	for(i=0;i<9;i++){
		//$('#pchla'+n+i).css('background-color', kolory_powrot[n])
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
					
				if(licznik_pkt == 5){
				$('#gamefield').remove();
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
					
				if(licznik_pkt == 5){
				$('#gamefield').remove();
					alert("Wygrales!");
					window.location.href='/';
				}
		}


	for(i=0;i<9;i++){
		//$('#pchla'+n+i).css('background-color', kolory_powrot[n])
		$('#pchla'+n+i).animate({
		top: dY[n] + 'px'
		});
	}


}

///////////////////////////////// klikniecie przycisku sam
function sam(){

	document.getElementById("sam").innerHTML="Grasz sam^^ masz 40sek";
	licznik.start();

	this.disabled=false;document.getElementById("multi1").disabled=true;
	this.disabled=false;document.getElementById("sam1").disabled=true;

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

	$('#gamefield').append(pchly[1][4]);
	$('#gamefield').append(pchly[1][2]);
	$('#gamefield').append(pchly[1][5] + '<br / >');

	$('#gamefield').append(pchly[1][0]);
	$('#gamefield').append(pchly[1][8]);
	$('#gamefield').append(pchly[1][1] + '<br / >');

	$('#gamefield').append(pchly[1][6]);
	$('#gamefield').append(pchly[1][3]);
	$('#gamefield').append(pchly[1][7] + '<br / >');
	pozycjaLosowa(1);
	
	$('#gamefield').append(pchly[2][4]);
	$('#gamefield').append(pchly[2][2]);
	$('#gamefield').append(pchly[2][5] + '<br / >');

	$('#gamefield').append(pchly[2][0]);
	$('#gamefield').append(pchly[2][8]);
	$('#gamefield').append(pchly[2][1] + '<br / >');

	$('#gamefield').append(pchly[2][6]);
	$('#gamefield').append(pchly[2][3]);
	$('#gamefield').append(pchly[2][7] + '<br / >');
	pozycjaLosowa(2);
	
	$('#gamefield').append(pchly[3][4]);
	$('#gamefield').append(pchly[3][2]);
	$('#gamefield').append(pchly[3][5] + '<br / >');

	$('#gamefield').append(pchly[3][0]);
	$('#gamefield').append(pchly[3][8]);
	$('#gamefield').append(pchly[3][1] + '<br / >');

	$('#gamefield').append(pchly[3][6]);
	$('#gamefield').append(pchly[3][3]);
	$('#gamefield').append(pchly[3][7] + '<br / >');
	pozycjaLosowa(3);
	
	$('#gamefield').append(pchly[4][4]);
	$('#gamefield').append(pchly[4][2]);
	$('#gamefield').append(pchly[4][5] + '<br / >');

	$('#gamefield').append(pchly[4][0]);
	$('#gamefield').append(pchly[4][8]);
	$('#gamefield').append(pchly[4][1] + '<br / >');

	$('#gamefield').append(pchly[4][6]);
	$('#gamefield').append(pchly[4][3]);
	$('#gamefield').append(pchly[4][7] + '<br / >');
	pozycjaLosowa(4);

}

///////////////////////////////// klikniecie przycisku wielu_graczy
function wielu_graczy(){

	document.getElementById("multi").innerHTML="Grasz z innymi graczami... Pierwszy wygrywa";
	this.disabled=false;document.getElementById("sam1").disabled=true;
	this.disabled=false;document.getElementById("multi1").disabled=true;

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
	
	
	
	var socket=io.connect(window.location.hostname);
		
	socket.on('connection',function(socket){
		socket.emit('wyslijpozycje',{ pos: '1', pos1: '2'});
		
		console.log(pos,pos1);
		
		socket.on('loop',function(){
			socket.emit('wyslijpozycje',{ pos: '1', pos1: '2'});
		});
		
    });
	

}

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
pozycja1 = pos;
pozycja2 =pos1;
}

///////////////////////////////// ustawienie na pozycji
function ustawPozycje(n,x,y){

	for(i=0;i<9;i++){
		$('#pchla'+n+i).animate({ top: y + 'px'});
		$('#pchla'+n+i).animate({ left: x + 'px'});
	}

}