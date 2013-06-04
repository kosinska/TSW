$(document).ready(function () {

});

var pchelka1 = '<div onmousedown="mDown()" onmouseup='+'mHor("right",0)'+ ' id="pchla1" class="pchla"></div>';
var pchelka2 = '<div onmousedown="mDown()" onmouseup='+'mHor("left",0)' + ' id="pchla2" class="pchla"></div>';
var pchelka3 = '<div onmousedown="mDown()" onmouseup='+'mVer("down",0)'+ ' id="pchla3" class="pchla"></div>';
var pchelka4 = '<div onmousedown="mDown()" onmouseup='+'mVer("up",0)'+ ' id="pchla4" class="pchla"></div>';
var pchelka5 = '<div onmousedown="mDown()" onmouseup="mUp()" id="pchla5" name="pchla" class="pchla"></div>';
var pchelka6 = '<div onmousedown="mDown()" onmouseup="mUp()" id="pchla6" name="pchla" class="pchla"></div>';
var pchelka7 = '<div onmousedown="mDown()" onmouseup="mUp()" id="pchla7" name="pchla" class="pchla"></div>';
var pchelka8 = '<div onmousedown="mDown()" onmouseup="mUp()" id="pchla8" name="pchla" class="pchla"></div>';
var pchelka9 = '<div id="pchla9" name="pchla" class="pchla"></div>';

var noOfElements=5;

var dX=new Array();
var dY=new Array();


function mDown(){

	for(i=1; i<10; i++){
		document.getElementById("pchla"+i).style.backgroundColor="#e93535";
		document.getElementById("pchla"+i).style.borderColor="#e93535";
		}
	
}


function mHor(dir,n){

	console.log(dX[n]);
	console.log("Kierunek: "+dir);
	console.trace();
		if(dir==="right"){
			dX[n] += 50;
				if(dX[n] >= 340) dX[n] = 340;
		}
		else if (dir==="left"){
			dX[n] -= 50;
				if(dX[n] < 0) dX[n] = 0;
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


function mVer(dir,n){

	console.log(dY[n]);
	console.trace();
		if(dir==="down"){
			dY[n] += 50;
				if(dY[n] >= 340) dY[n] = 340;
		}
		else if (dir==="up"){
			dY[n] -= 50;
				if(dY[n] < 0) dY[n] = 0;
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


function mySam(){

	document.getElementById("sam").innerHTML="Grasz sam^^ masz 60sek";

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

	randomLocation(0);

	/*randomLocation(1);
	randomLocation(2);
	randomLocation(3);
	randomLocation(4);
	randomLocation(5);*/

}

function myMulti(){

	document.getElementById("multi").innerHTML="Grasz multi... Pierwszy wygrywa";
	this.disabled=false;document.getElementById("sam1").disabled=true;
	this.disabled=false;document.getElementById("multi1").disabled=true;

}

function randomLocation(n){

	var rN=Math.floor(Math.random()*350);
	var pos=Math.floor(rN/50)*50;
	
	setPosition(pos,pos);
	dX[n]=pos;
	dY[n]=pos;

}

function setPosition(x,y){
	for(i=1; i<10; i++){
		$('#pchla'+i).animate({ top: y + 'px'});
		$('#pchla'+i).animate({ left: x + 'px'});
	}
	
}