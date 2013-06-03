$(document).ready(function () {



});

var pchelka1 = '<div onmousedown="mDown()" onmouseup='+'mHor("right",0)'+ ' id="pchla1" class="pchla">pch</div>';
var pchelka2 = '<div onmousedown="mDown()" onmouseup='+'mHor("left",0)' + ' id="pchla2" class="pchla">pch</div>';
var pchelka3 = '<div onmousedown="mDown()" onmouseup='+'mVer("down",0)'+ ' id="pchla3" class="pchla">pch</div>';
var pchelka4 = '<div onmousedown="mDown()" onmouseup='+'mVer("up",0)'+ ' id="pchla4" class="pchla">pch</div>';
var pchelka5 = '<div onmousedown="mDown()" onmouseup="mUp()" id="pchla5" class="pchla">pch</div>';
var pchelka6 = '<div onmousedown="mDown()" onmouseup="mUp()" id="pchla6" class="pchla">pch</div>';
var pchelka7 = '<div onmousedown="mDown()" onmouseup="mUp()" id="pchla7" class="pchla">pch</div>';
var pchelka8 = '<div onmousedown="mDown()" onmouseup="mUp()" id="pchla8" class="pchla">pch</div>';
var pchelka9 = '<div id="pchla9" class="pchla">pch</div>';


//var pudelko = '<div id="pudlo" class="pudlo"></div>';


function mDown(){
document.getElementById("pchla1").style.backgroundColor="blue";
document.getElementById("pchla1").innerHTML="RM";
document.getElementById("pchla2").style.backgroundColor="yello";
document.getElementById("pchla2").innerHTML="RM";
document.getElementById("pchla3").style.backgroundColor="blue";
document.getElementById("pchla3").innerHTML="RM";
document.getElementById("pchla4").style.backgroundColor="green";
document.getElementById("pchla4").innerHTML="RM";
document.getElementById("pchla5").style.backgroundColor="white";
document.getElementById("pchla5").innerHTML="RM";
document.getElementById("pchla6").style.backgroundColor="black";
document.getElementById("pchla6").innerHTML="RM";
document.getElementById("pchla7").style.backgroundColor="brown";
document.getElementById("pchla7").innerHTML="RM";
document.getElementById("pchla8").style.backgroundColor="pink";
document.getElementById("pchla8").innerHTML="RM";
document.getElementById("pchla9").style.backgroundColor="cyan";
document.getElementById("pchla9").innerHTML="RM";

}

//var odleglosc=0;
//var odleglosc2=0;

var noOfElements=5;

var dX=new Array();
var dY=new Array();


function mHor(dir,n){
console.log(dX[n]);
console.log("Kierunek: "+dir);
console.trace();
if(dir==="right"){
	dX[n] += 50;
	if(dX[n] >= 380) dX[n] = 380;
} else if (dir==="left"){
	dX[n] -= 50;
	if(dX[n] <0) dX[n] = 0;
}

document.getElementById("pchla1").style.backgroundColor="red";
document.getElementById("pchla1").innerHTML="skL";
$('#pchla1').animate({
left: dX[n] + 'px'
});
document.getElementById("pchla2").style.backgroundColor="red";
document.getElementById("pchla2").innerHTML="skR";
$('#pchla2').animate({
left: dX[n] + 'px'
});
document.getElementById("pchla3").style.backgroundColor="red";
document.getElementById("pchla3").innerHTML="skT";
$('#pchla3').animate({
left: dX[n] + 'px'
});
document.getElementById("pchla4").style.backgroundColor="red";
document.getElementById("pchla4").innerHTML="skD";
$('#pchla4').animate({
left: dX[n] + 'px'
});
document.getElementById("pchla5").style.backgroundColor="red";
document.getElementById("pchla5").innerHTML="sk";
$('#pchla5').animate({
left: dX[n] + 'px'
});
document.getElementById("pchla6").style.backgroundColor="red";
document.getElementById("pchla6").innerHTML="sk";
$('#pchla6').animate({
left: dX[n] + 'px'
});
document.getElementById("pchla7").style.backgroundColor="red";
document.getElementById("pchla7").innerHTML="sk";
$('#pchla7').animate({
left: dX[n] + 'px'
});
document.getElementById("pchla8").style.backgroundColor="red";
document.getElementById("pchla8").innerHTML="sk";
$('#pchla8').animate({
left: dX[n] + 'px'
});
document.getElementById("pchla9").style.backgroundColor="red";
document.getElementById("pchla9").innerHTML="sk";
$('#pchla9').animate({
left: dX[n] + 'px'
});

}

function mVer(dir,n){
console.log(dY[n]);
console.trace();
if(dir==="down"){
	dY[n] += 50;
	if(dY[n] >= 380) dY[n] = 380;
} else if (dir==="up"){
	dY[n] -= 50;
	if(dY[n] <0) dY[n] = 0;
}

document.getElementById("pchla1").style.backgroundColor="red";
document.getElementById("pchla1").innerHTML="skL";
$('#pchla1').animate({
top: dY[n] + 'px'
});
document.getElementById("pchla2").style.backgroundColor="red";
document.getElementById("pchla2").innerHTML="skR";
$('#pchla2').animate({
top: dY[n] + 'px'
});
document.getElementById("pchla3").style.backgroundColor="red";
document.getElementById("pchla3").innerHTML="skT";
$('#pchla3').animate({
top: dY[n] + 'px'
});
document.getElementById("pchla4").style.backgroundColor="red";
document.getElementById("pchla4").innerHTML="skD";
$('#pchla4').animate({
top: dY[n] + 'px'
});
document.getElementById("pchla5").style.backgroundColor="red";
document.getElementById("pchla5").innerHTML="sk";
$('#pchla5').animate({
top: dY[n] + 'px'
});
document.getElementById("pchla6").style.backgroundColor="red";
document.getElementById("pchla6").innerHTML="sk";
$('#pchla6').animate({
top: dY[n] + 'px'
});
document.getElementById("pchla7").style.backgroundColor="red";
document.getElementById("pchla7").innerHTML="sk";
$('#pchla7').animate({
top: dY[n] + 'px'
});
document.getElementById("pchla8").style.backgroundColor="red";
document.getElementById("pchla8").innerHTML="sk";
$('#pchla8').animate({
top: dY[n] + 'px'
});
document.getElementById("pchla9").style.backgroundColor="red";
document.getElementById("pchla9").innerHTML="sk";
$('#pchla9').animate({
top: dY[n] + 'px'
});

}


function mySam()
{
document.getElementById("sam").innerHTML="Grasz sam^^ masz 60sek";

this.disabled=false;document.getElementById("multi1").disabled=true;

$('#pole_gry').append('<div id ="gamefield"></div>');

//$('#gamefield').append(pudelko);
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

function myMulti()
{
document.getElementById("multi").innerHTML="Grasz multi... Pierwszy wygrywa";
this.disabled=false;document.getElementById("sam1").disabled=true;
}

function randomLocation(n){
	var rN=Math.floor(Math.random()*350);
	var pos=Math.floor(rN/50)*50;
	
	setPosition(pos,pos);
	dX[n]=pos;
	dY[n]=pos;

}

function setPosition(x,y){

	$('#pchla1').animate({ top: y + 'px'});
	$('#pchla1').animate({ left: x + 'px'});
	$('#pchla2').animate({ top: y + 'px'});
	$('#pchla2').animate({ left: x + 'px'});
	$('#pchla3').animate({ top: y + 'px'});
	$('#pchla3').animate({ left: x + 'px'});
	$('#pchla4').animate({ top: y + 'px'});
	$('#pchla4').animate({ left: x + 'px'});
	$('#pchla5').animate({ top: y + 'px'});
	$('#pchla5').animate({ left: x + 'px'});
	$('#pchla6').animate({ top: y + 'px'});
	$('#pchla6').animate({ left: x + 'px'});
	$('#pchla7').animate({ top: y + 'px'});
	$('#pchla7').animate({ left: x + 'px'});
	$('#pchla8').animate({ top: y + 'px'});
	$('#pchla8').animate({ left: x + 'px'});
	$('#pchla9').animate({ top: y + 'px'});
	$('#pchla9').animate({ left: x + 'px'});	
	
}