$(document).ready(function () {

});

/*
var pchelka1 = '<div onmousedown="myszDol()" onmouseup='+'rPoz("right",0)'+ ' id="pchla1" class="pchla"></div>';
var pchelka2 = '<div onmousedown="myszDol()" onmouseup='+'rPoz("left",0)' + ' id="pchla2" class="pchla"></div>';
var pchelka3 = '<div onmousedown="myszDol()" onmouseup='+'rPion("down",0)'+ ' id="pchla3" class="pchla"></div>';
var pchelka4 = '<div onmousedown="myszDol()" onmouseup='+'rPion("up",0)'+ ' id="pchla4" class="pchla"></div>';
var pchelka5 = '<div onmousedown="myszDol()" id="pchla5" name="pchla" class="pchla"></div>';
var pchelka6 = '<div onmousedown="myszDol()" id="pchla6" name="pchla" class="pchla"></div>';
var pchelka7 = '<div onmousedown="myszDol()" id="pchla7" name="pchla" class="pchla"></div>';
var pchelka8 = '<div onmousedown="myszDol()" id="pchla8" name="pchla" class="pchla"></div>';
var pchelka9 = '<div id="pchla9" name="pchla" class="pchla"></div>';
*/

var kolory_powrot=['#EE6363','#CAE1FF','yello','orange','green'];

var kolory_klik=['#e93535','#B0C4DE','gray','gray','gray'];

var pchly=new Array(5);


///////////////////////////////// tablica pchel
for(i=0; i<5;i++){
	pchly[i]=new Array(9);
}

///////////////////////////////// tablica pchel skladowych
for(j=0;j<2;j++){
	for(k=0;k<9;k++){
		if(k<2){
	console.log('k: '+k+' j:'+ j);
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

var licznik = new odliczanie({  
    sekundy: 15,
    onUpdateStatus: function(sec){console.log(sec);},
    onCounterEnd: function(){if(licznik_pkt != 2){ alert('Czas się skończył! Przegrałeś :(');
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

	for(i=0;i<9;i++){
		$('#pchla'+n+i).css('backgound-color', kolory_klik[n])
	}
	
}

///////////////////////////////// odklikniecie myszy z lewej/prawej
function rPoz(dir,n){

	console.log('n: '+n+' dx: '+dX + ' dir: '+ dir);
	//console.trace();
	
		if(dir===0){
			dX[n] += 50;
				if(dX[n] >= 340) dX[n] = 340;
				
				if( dX[n] >= 150 && dY[n] == 150 ) {
					if(n==0)$('.pchla'+n).remove();
					if(n==1)$('.pchla'+n).remove();
					licznik_pkt++;};
					
				if( dX[n] >= 150 && dY[n] == 200 ) {
					if(n==0)$('.pchla'+n).remove();
					if(n==1)$('.pchla'+n).remove();
					licznik_pkt++;};
						
				if(licznik_pkt == 2){
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
					licznik_pkt++;};
					
				if( dX[n] <= 200 && dY[n] == 200 ) {
					if(n==0)$('.pchla'+n).remove();
					if(n==1)$('.pchla'+n).remove();
					licznik_pkt++;};
					
				if(licznik_pkt == 2){
					$('#gamefield').remove();
					alert("Wygrales!");
					window.location.href='/';
				}
		}

	for(i=0;i<9;i++){
		$('#pchla'+n+i).css('backgound-color', kolory_powrot[n])
		$('#pchla'+n+i).animate({
		left: dX[n] + 'px'
		});
	}

}


///////////////////////////////// odklikniecie myszy z gory/dolu
function rPion(dir,n){

	console.log(n);
	console.log(dY);
	console.trace();
		if(dir===2){
			dY[n] += 50;
				if(dY[n] >= 340) dY[n] = 340;
				
				if( dX[n] == 150 && dY[n] == 150 ) {
					if(n==0)$('.pchla'+n).remove();
					if(n==1)$('.pchla'+n).remove();
					licznik_pkt++;};
					
				if( dX[n] == 200 && dY[n] == 150 ) {
					if(n==0)$('.pchla'+n).remove();
					if(n==1)$('.pchla'+n).remove();
					licznik_pkt++;};
					
				if(licznik_pkt == 2){
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
					licznik_pkt++;};
					
				if( dX[n] == 200 && dY[n] == 200 ) {
					if(n==0)$('.pchla'+n).remove();
					if(n==1)$('.pchla'+n).remove();
					licznik_pkt++;};
					
				if(licznik_pkt == 2){
				$('#gamefield').remove();
					alert("Wygrales!");
					window.location.href='/';
				}
		}


	for(i=0;i<9;i++){
		$('#pchla'+n+i).css('backgound-color', kolory_powrot[n])
		$('#pchla'+n+i).animate({
		top: dY[n] + 'px'
		});
	}


}

///////////////////////////////// klikniecie przycisku sam
function sam(){

	document.getElementById("sam").innerHTML="Grasz sam^^ masz 60sek";
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
	
	
	
	/*pozycjaLosowa(2);
	pozycjaLosowa(3);
	pozycjaLosowa(4);*/

}

///////////////////////////////// klikniecie przycisku wielu_graczy
function wielu_graczy(){

	document.getElementById("multi").innerHTML="Grasz z innymi graczami... Pierwszy wygrywa";
	this.disabled=false;document.getElementById("sam1").disabled=true;
	this.disabled=false;document.getElementById("multi1").disabled=true;

}

///////////////////////////////// losowanie pozycji
function pozycjaLosowa(n){

	var rN=Math.floor(Math.random()*350);
	var pos=Math.floor(rN/50)*50;
	var pos1=Math.floor(rN/50)*50;
	
	//wyklucz pos pudelka
	
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