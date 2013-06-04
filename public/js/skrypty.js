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

var liczbaElementow=5;

var dX=new Array();
var dY=new Array();

var licznik_pkt=0;

var licznik = new odliczanie({  
    seconds: 5,  // number of seconds to count down
    onUpdateStatus: function(sec){console.log(sec);}, // callback for each second
    onCounterEnd: function(){if(licznik_pkt != 1){ alert('Czas się skończył! Przegrałeś :(');}}// final action
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
		document.getElementById("pchla"+i).style.backgroundColor="#e93535";
		document.getElementById("pchla"+i).style.borderColor="#e93535";
		}
	
}


function rPoz(dir,n){

	console.log(dX[n]);
	console.log("Kierunek: "+dir);
	console.trace();
		if(dir==="right"){
			dX[n] += 50;
				if(dX[n] >= 340) dX[n] = 340;
				
				if( dX[n] >= 150 && dY[n] == 150 ) { $('.pchla').remove(); licznik_pkt++;};
				if( dX[n] >= 150 && dY[n] == 200 ) { $('.pchla').remove(); licznik_pkt++;};	
				if(licznik_pkt == 1) alert("Wygrales!");	 
		}
		else if (dir==="left"){
			dX[n] -= 50;
				if(dX[n] < 0) dX[n] = 0;
				
				if( dX[n] <= 200 && dY[n] == 150 ) { $('.pchla').remove(); licznik_pkt++;};
				if( dX[n] <= 200 && dY[n] == 200 ) { $('.pchla').remove(); licznik_pkt++;};
				if(licznik_pkt == 1) alert("Wygrales!");
		}

	for(i=1; i<10; i++){
		document.getElementById("pchla"+i).style.backgroundColor="#EE6363";
		$('#pchla'+i).animate({
		left: dX[n] + 'px'
		});
	}

	for(i=1; i<10; i++){
		document.getElementById("pchla"+i).style.backgroundColor="#EE6363";
		document.getElementById("pchla"+i).style.borderColor="#EE6363";
	}

}


function rPion(dir,n){

	console.log(dY[n]);
	console.trace();
		if(dir==="down"){
			dY[n] += 50;
				if(dY[n] >= 340) dY[n] = 340;
				
				if( dX[n] == 150 && dY[n] == 150 ) { $('.pchla').remove(); licznik_pkt++;};
				if( dX[n] == 200 && dY[n] == 150 ) { $('.pchla').remove(); licznik_pkt++;};
				if(licznik_pkt == 1) alert("Wygrales!");
		}
		else if (dir==="up"){
			dY[n] -= 50;
				if(dY[n] < 0) dY[n] = 0;
				
				if( dX[n] == 150 && dY[n] == 200 ) { $('.pchla').remove(); licznik_pkt++;};
				if( dX[n] == 200 && dY[n] == 200 ) { $('.pchla').remove(); licznik_pkt++;};
				if(licznik_pkt == 1) alert("Wygrales!");
		}

	for(i=1; i<10; i++){
		document.getElementById("pchla"+i).style.backgroundColor="#EE6363";
		$('#pchla'+i).animate({
		top: dY[n] + 'px'
		});
	}
	
	for(i=1; i<10; i++){
		document.getElementById("pchla"+i).style.backgroundColor="#EE6363";
		document.getElementById("pchla"+i).style.borderColor="#EE6363";
	}
	
}


function sam(){

	document.getElementById("sam").innerHTML="Grasz sam^^ masz 60sek";
	licznik.start();

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

	/*pozycjaLosowa(1);
	pozycjaLosowa(2);
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
	
	ustawPozycje(pos,pos);
	dX[n]=pos;
	dY[n]=pos;

}

function ustawPozycje(x,y){
	for(i=1; i<10; i++){
		$('#pchla'+i).animate({ top: y + 'px'});
		$('#pchla'+i).animate({ left: x + 'px'});
	}
	
}