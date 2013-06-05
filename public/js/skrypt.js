$(document).ready(function () {

});

var pchelka1 = '<div onmousedown="myszDol()" onmouseup='+'rPoz("right",0)'+ ' id="pchla1" class="pchla"></div>';
var pchelka2 = '<div onmousedown="myszDol()" onmouseup='+'rPoz("left",0)' + ' id="pchla2" class="pchla"></div>';
var pchelka3 = '<div onmousedown="myszDol()" onmouseup='+'rPion("down",0)'+ ' id="pchla3" class="pchla"></div>';
var pchelka4 = '<div onmousedown="myszDol()" onmouseup='+'rPion("up",0)'+ ' id="pchla4" class="pchla"></div>';
var pchelka5 = '<div onmousedown="myszDol()" onmouseup="mUp()" id="pchla5" name="pchla" class="pchla"></div>';
var pchelka6 = '<div onmousedown="myszDol()" onmouseup="mUp()" id="pchla6" name="pchla" class="pchla"></div>';
var pchelka7 = '<div onmousedown="myszDol()" onmouseup="mUp()" id="pchla7" name="pchla" class="pchla"></div>';
var pchelka8 = '<div onmousedown="myszDol()" onmouseup="mUp()" id="pchla8" name="pchla" class="pchla"></div>';
var pchelka9 = '<div id="pchla9" name="pchla" class="pchla"></div>';

var pchelka10 = '<div onmousedown="myszDol()" onmouseup='+'rPoz("right",1)'+ ' id="pchla10" class="pchla2"></div>';
var pchelka11 = '<div onmousedown="myszDol()" onmouseup='+'rPoz("left",1)' + ' id="pchla11" class="pchla2"></div>';
var pchelka12 = '<div onmousedown="myszDol()" onmouseup='+'rPion("down",1)'+ ' id="pchla12" class="pchla2"></div>';
var pchelka13 = '<div onmousedown="myszDol()" onmouseup='+'rPion("up",1)'+ ' id="pchla13" class="pchla2"></div>';
var pchelka14 = '<div onmousedown="myszDol()" onmouseup="mUp()" id="pchla14" name="pchla2" class="pchla2"></div>';
var pchelka15 = '<div onmousedown="myszDol()" onmouseup="mUp()" id="pchla15" name="pchla2" class="pchla2"></div>';
var pchelka16 = '<div onmousedown="myszDol()" onmouseup="mUp()" id="pchla16" name="pchla2" class="pchla2"></div>';
var pchelka17 = '<div onmousedown="myszDol()" onmouseup="mUp()" id="pchla17" name="pchla2" class="pchla2"></div>';
var pchelka18 = '<div id="pchla18" name="pchla2" class="pchla2"></div>';

var liczbaElementow=5;

var n;

var dX=new Array();
var dY=new Array();

var licznik_pkt=0;

var licznik = new odliczanie({  
    seconds: 15,  // number of seconds to count down
    onUpdateStatus: function(sec){console.log(sec);}, // callback for each second
    onCounterEnd: function(){if(licznik_pkt != 2){ alert('Czas się skończył! Przegrałeś :(');
							window.location.href='/';}}// final action
});

function odliczanie(options) {
  var timer,
  instance = this,
  seconds = options.seconds || 10,
  updateStatus = options.onUpdateStatus || function () {},
  counterEnd = options.onCounterEnd || function () {};

  function decrementCounter() {
    updateStatus(seconds);
    if (seconds === 0) {
      counterEnd();
      instance.stop();
    }
    seconds--;
  }

  this.start = function () {
    clearInterval(timer);
    timer = 0;
    seconds = options.seconds;
    timer = setInterval(decrementCounter, 1000);
  };

  this.stop = function () {
    clearInterval(timer);
  };
}

function myszDol(){

	for(i=1; i<10; i++){
		$('#pchla'+i).style('backgound-color', '#e93535')
		//document.getElementById("pchla"+i).style.backgroundColor="#e93535";
		}
		
	for(i=10; i<19; i++){
		$('#pchla'+i).style('backgound-color', '#B0C4DE')
	//document.getElementById("pchla"+i).style.backgroundColor="#B0C4DE";
	}
	
}


function rPoz(dir,n){

	console.log(n);
	console.log(dX[n]);
	console.log("Kierunek: "+dir);
	console.trace();
		if(dir==="right"){
			dX[n] += 50;
				if(dX[n] >= 340) dX[n] = 340;
				
				if( dX[n] >= 150 && dY[n] == 150 ) {
					if(n==0)$('.pchla').remove();
					if(n==1)$('.pchla2').remove();
					licznik_pkt++;};
					
				if( dX[n] >= 150 && dY[n] == 200 ) {
					if(n==0)$('.pchla').remove();
					if(n==1)$('.pchla2').remove();
					licznik_pkt++;};
						
				if(licznik_pkt == 2){
					$('#gamefield').remove();
					alert("Wygrales!");
					window.location.href='/';
				} 
		}
		else if (dir==="left"){
			dX[n] -= 50;
				if(dX[n] < 0) dX[n] = 0;
				
				if( dX[n] <= 200 && dY[n] == 150 ) {
					if(n==0)$('.pchla').remove();
					if(n==1)$('.pchla2').remove();
					licznik_pkt++;};
					
				if( dX[n] <= 200 && dY[n] == 200 ) {
					if(n==0)$('.pchla').remove();
					if(n==1)$('.pchla2').remove();
					licznik_pkt++;};
					
				if(licznik_pkt == 2){
					$('#gamefield').remove();
					alert("Wygrales!");
					window.location.href='/';
				}
		}

	for(i=1; i<10; i++){
		document.getElementById("pchla"+i).style.backgroundColor="#EE6363";
		$('#pchla'+i).animate({
		left: dX[n] + 'px'
		});

}
	
	for(i=10; i<19; i++){
		document.getElementById("pchla"+i).style.backgroundColor="#CAE1FF";
		$('#pchla'+i).animate({
		left: dX[n] + 'px'
		});
	}

}



function rPion(dir,n){

	console.log(n);
	console.log(dY[n]);
	console.trace();
		if(dir==="down"){
			dY[n] += 50;
				if(dY[n] >= 340) dY[n] = 340;
				
				if( dX[n] == 150 && dY[n] == 150 ) {
					if(n==0)$('.pchla').remove();
					if(n==1)$('.pchla2').remove();
					licznik_pkt++;};
					
				if( dX[n] == 200 && dY[n] == 150 ) {
					if(n==0)$('.pchla').remove();
					if(n==1)$('.pchla2').remove();
					licznik_pkt++;};
					
				if(licznik_pkt == 1){
				$('#gamefield').remove();
					alert("Wygrales!");
					window.location.href='/';
				}
		}
		else if (dir==="up"){
			dY[n] -= 50;
				if(dY[n] < 0) dY[n] = 0;
				
				if( dX[n] == 150 && dY[n] == 200 ) {
					if(n==0)$('.pchla').remove();
					if(n==1)$('.pchla2').remove();
					licznik_pkt++;};
					
				if( dX[n] == 200 && dY[n] == 200 ) {
					if(n==0)$('.pchla').remove();
					if(n==1)$('.pchla2').remove();
					licznik_pkt++;};
					
				if(licznik_pkt == 1){
				$('#gamefield').remove();
					alert("Wygrales!");
					window.location.href='/';
				}
		}

if(n==0){
	for(i=1; i<10; i++){
		document.getElementById("pchla"+i).style.backgroundColor="#EE6363";
		$('#pchla'+i).animate({
		top: dY[n] + 'px'
		});
	}
}

if(n==1){
	for(i=10; i<19; i++){
		document.getElementById("pchla"+i).style.backgroundColor="#CAE1FF";
		$('#pchla'+i).animate({
		top: dY[n] + 'px'
		});
	}
}	
}


function sam(){

	document.getElementById("sam").innerHTML="Grasz sam^^ masz 60sek";
	//licznik.start();

	this.disabled=false;document.getElementById("multi1").disabled=true;
	this.disabled=false;document.getElementById("sam1").disabled=true;

	$('#pole_gry').append('<div id ="gamefield"></div>');

	$('#gamefield').append(pchelka5);
	$('#gamefield').append(pchelka3);
	$('#gamefield').append(pchelka6 + '<br / >');

	$('#gamefield').append(pchelka1);
	$('#gamefield').append(pchelka9);
	$('#gamefield').append(pchelka2 + '<br / >');

	$('#gamefield').append(pchelka7);
	$('#gamefield').append(pchelka4);
	$('#gamefield').append(pchelka8 + '<br / >');
	pozycjaLosowa(0);

	$('#gamefield').append(pchelka14);
	$('#gamefield').append(pchelka12);
	$('#gamefield').append(pchelka15 + '<br / >');

	$('#gamefield').append(pchelka10);
	$('#gamefield').append(pchelka18);
	$('#gamefield').append(pchelka11 + '<br / >');

	$('#gamefield').append(pchelka16);
	$('#gamefield').append(pchelka13);
	$('#gamefield').append(pchelka17 + '<br / >');
	pozycjaLosowa(1);
	
	
	
	/*pozycjaLosowa(2);
	pozycjaLosowa(3);
	pozycjaLosowa(4);*/

}

function wielu_graczy(){

	document.getElementById("multi").innerHTML="Grasz z innymi graczami... Pierwszy wygrywa";
	this.disabled=false;document.getElementById("sam1").disabled=true;
	this.disabled=false;document.getElementById("multi1").disabled=true;

}

function pozycjaLosowa(n){

	var rN=Math.floor(Math.random()*350);
	var pos=Math.floor(rN/50)*50;
	var pos1=Math.floor(rN/50)*50;
	
	ustawPozycje(pos1,pos);
	dX[n]=pos1;
	dY[n]=pos;

}

function ustawPozycje(x,y){

	for(i=1; i<10; i++){
		$('#pchla'+i).animate({ top: y + 'px'});
		$('#pchla'+i).animate({ left: x + 'px'});
	}


	for(i=10; i<19; i++){
		$('#pchla'+i).animate({ top: y + 'px'});
		$('#pchla'+i).animate({ left: x + 'px'});
		
}
}