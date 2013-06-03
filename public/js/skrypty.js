$(document).ready(function () {



});

var pchelka1 = '<div onmousedown="mDown()" onmouseup='+'mHor("right",0)'+ ' id="pchla1" class="pchla">pci</div>';
var pchelka2 = '<div onmousedown="mDown()" onmouseup='+'mHor("left",0)' + ' id="pchla2" class="pchla">pci</div>';
var pchelka3 = '<div onmousedown="mDown()" onmouseup='+'mVer("down",0)'+ ' id="pchla3" class="pchla">pci</div>';
var pchelka4 = '<div onmousedown="mDown()" onmouseup='+'mVer("up",0)'+ ' id="pchla4" class="pchla">pci</div>';
var pchelka5 = '<div onmousedown="mDown()" onmouseup="mUp()" id="pchla5" class="pchla">pci</div>';
var pchelka6 = '<div onmousedown="mDown()" onmouseup="mUp()" id="pchla6" class="pchla">pci</div>';
var pchelka7 = '<div onmousedown="mDown()" onmouseup="mUp()" id="pchla7" class="pchla">pci</div>';
var pchelka8 = '<div onmousedown="mDown()" onmouseup="mUp()" id="pchla8" class="pchla">pci</div>';
var pchelka9 = '<div id="pchla9" class="pchla">pci</div>';


//var pudelko = '<div id="pudlo" class="pudlo"></div>';


function mDown(){

document.getElementById("pchla1").style.backgroundColor="#e93535";
document.getElementById("pchla2").style.backgroundColor="#e93535";
document.getElementById("pchla3").style.backgroundColor="#e93535";
document.getElementById("pchla4").style.backgroundColor="#e93535";
document.getElementById("pchla5").style.backgroundColor="#e93535";
document.getElementById("pchla6").style.backgroundColor="#e93535";
document.getElementById("pchla7").style.backgroundColor="#e93535";
document.getElementById("pchla8").style.backgroundColor="#e93535";
document.getElementById("pchla9").style.backgroundColor="#e93535";

document.getElementById("pchla1").style.color="#e93535";
document.getElementById("pchla2").style.color="#e93535";
document.getElementById("pchla3").style.color="#e93535";
document.getElementById("pchla4").style.color="#e93535";
document.getElementById("pchla5").style.color="#e93535";
document.getElementById("pchla6").style.color="#e93535";
document.getElementById("pchla7").style.color="#e93535";
document.getElementById("pchla8").style.color="#e93535";
document.getElementById("pchla9").style.color="#e93535";


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
	if(dX[n] >= 340) dX[n] = 340;
} else if (dir==="left"){
	dX[n] -= 50;
	if(dX[n] <0) dX[n] = 0;
}

document.getElementById("pchla1").style.backgroundColor="#EE6363";
$('#pchla1').animate({
left: dX[n] + 'px'
});
document.getElementById("pchla2").style.backgroundColor="#EE6363";
$('#pchla2').animate({
left: dX[n] + 'px'
});
document.getElementById("pchla3").style.backgroundColor="#EE6363";
$('#pchla3').animate({
left: dX[n] + 'px'
});
document.getElementById("pchla4").style.backgroundColor="#EE6363";
$('#pchla4').animate({
left: dX[n] + 'px'
});
document.getElementById("pchla5").style.backgroundColor="#EE6363";
$('#pchla5').animate({
left: dX[n] + 'px'
});
document.getElementById("pchla6").style.backgroundColor="#EE6363";
$('#pchla6').animate({
left: dX[n] + 'px'
});
document.getElementById("pchla7").style.backgroundColor="#EE6363";
$('#pchla7').animate({
left: dX[n] + 'px'
});
document.getElementById("pchla8").style.backgroundColor="#EE6363";
$('#pchla8').animate({
left: dX[n] + 'px'
});
document.getElementById("pchla9").style.backgroundColor="#EE6363";
$('#pchla9').animate({
left: dX[n] + 'px'
});

document.getElementById("pchla1").style.color="#EE6363";
document.getElementById("pchla2").style.color="#EE6363";
document.getElementById("pchla3").style.color="#EE6363";
document.getElementById("pchla4").style.color="#EE6363";
document.getElementById("pchla5").style.color="#EE6363";
document.getElementById("pchla6").style.color="#EE6363";
document.getElementById("pchla7").style.color="#EE6363";
document.getElementById("pchla8").style.color="#EE6363";
document.getElementById("pchla9").style.color="#EE6363";

}

function mVer(dir,n){
console.log(dY[n]);
console.trace();
if(dir==="down"){
	dY[n] += 50;
	if(dY[n] >= 340) dY[n] = 340;
} else if (dir==="up"){
	dY[n] -= 50;
	if(dY[n] <0) dY[n] = 0;
}

document.getElementById("pchla1").style.backgroundColor="#EE6363";
$('#pchla1').animate({
top: dY[n] + 'px'
});
document.getElementById("pchla2").style.backgroundColor="#EE6363";
$('#pchla2').animate({
top: dY[n] + 'px'
});
document.getElementById("pchla3").style.backgroundColor="#EE6363";
$('#pchla3').animate({
top: dY[n] + 'px'
});
document.getElementById("pchla4").style.backgroundColor="#EE6363";
$('#pchla4').animate({
top: dY[n] + 'px'
});
document.getElementById("pchla5").style.backgroundColor="#EE6363";
$('#pchla5').animate({
top: dY[n] + 'px'
});
document.getElementById("pchla6").style.backgroundColor="#EE6363";
$('#pchla6').animate({
top: dY[n] + 'px'
});
document.getElementById("pchla7").style.backgroundColor="#EE6363";
$('#pchla7').animate({
top: dY[n] + 'px'
});
document.getElementById("pchla8").style.backgroundColor="#EE6363";
$('#pchla8').animate({
top: dY[n] + 'px'
});
document.getElementById("pchla9").style.backgroundColor="#EE6363";
$('#pchla9').animate({
top: dY[n] + 'px'
});

document.getElementById("pchla1").style.color="#EE6363";
document.getElementById("pchla2").style.color="#EE6363";
document.getElementById("pchla3").style.color="#EE6363";
document.getElementById("pchla4").style.color="#EE6363";
document.getElementById("pchla5").style.color="#EE6363";
document.getElementById("pchla6").style.color="#EE6363";
document.getElementById("pchla7").style.color="#EE6363";
document.getElementById("pchla8").style.color="#EE6363";
document.getElementById("pchla9").style.color="#EE6363";

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