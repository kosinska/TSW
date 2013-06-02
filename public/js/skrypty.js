$(document).ready(function () {

var pchelka1 = '<div onmousedown="mDown()" onmouseup="mUp1()" id="pchla1" class="pchla">pch</div>';
var pchelka2 = '<div onmousedown="mDown()" onmouseup="mUp2()" id="pchla2" class="pchla">pch</div>';
var pchelka3 = '<div onmousedown="mDown()" onmouseup="mUp()" id="pchla3" class="pchla">pch</div>';
var pchelka4 = '<div onmousedown="mDown()" onmouseup="mUp()" id="pchla4" class="pchla">pch</div>';
var pchelka5 = '<div onmousedown="mDown()" onmouseup="mUp()" id="pchla5" class="pchla">pch</div>';
var pchelka6 = '<div onmousedown="mDown()" onmouseup="mUp()" id="pchla6" class="pchla">pch</div>';
var pchelka7 = '<div onmousedown="mDown()" onmouseup="mUp()" id="pchla7" class="pchla">pch</div>';
var pchelka8 = '<div onmousedown="mDown()" onmouseup="mUp()" id="pchla8" class="pchla">pch</div>';

var pudelko = '<div id="pudlo" class="pudlo">pud</div>';

$('#gamefield').append(pchelka1);
$('#gamefield').append(pchelka2);
$('#gamefield').append(pchelka3);
$('#gamefield').append(pchelka4);
$('#gamefield').append(pchelka5);
$('#gamefield').append(pchelka6);
$('#gamefield').append(pchelka7);
$('#gamefield').append(pchelka8);

$('#gamefield').append(pudelko);

});

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

}

var odleglosc=0;

function mUp1(){
console.log(odleglosc);
console.trace();
odleglosc += 50;
if(odleglosc >= 380) odleglosc = 380;
document.getElementById("pchla1").style.backgroundColor="red";
document.getElementById("pchla1").innerHTML="skaczeL";
$('#pchla1').animate({
left: odleglosc + 'px'
});
document.getElementById("pchla2").style.backgroundColor="red";
document.getElementById("pchla2").innerHTML="skaczeR";
$('#pchla2').animate({
left: odleglosc + 'px'
});
document.getElementById("pchla3").style.backgroundColor="red";
document.getElementById("pchla3").innerHTML="skacze";
$('#pchla3').animate({
left: odleglosc + 'px'
});
document.getElementById("pchla4").style.backgroundColor="red";
document.getElementById("pchla4").innerHTML="skacze";
$('#pchla4').animate({
left: odleglosc + 'px'
});
document.getElementById("pchla5").style.backgroundColor="red";
document.getElementById("pchla5").innerHTML="skacze";
$('#pchla5').animate({
left: odleglosc + 'px'
});
document.getElementById("pchla6").style.backgroundColor="red";
document.getElementById("pchla6").innerHTML="skacze";
$('#pchla6').animate({
left: odleglosc + 'px'
});
document.getElementById("pchla7").style.backgroundColor="red";
document.getElementById("pchla7").innerHTML="skacze";
$('#pchla7').animate({
left: odleglosc + 'px'
});
document.getElementById("pchla8").style.backgroundColor="red";
document.getElementById("pchla8").innerHTML="skacze";
$('#pchla8').animate({
left: odleglosc + 'px'
});
}

function mUp2(){
console.log(odleglosc);
console.trace();
odleglosc -= 50;
if(odleglosc = 0) odleglosc = 0;
document.getElementById("pchla1").style.backgroundColor="red";
document.getElementById("pchla1").innerHTML="skaczeL";
$('#pchla1').animate({
left: odleglosc + 'px'
});
document.getElementById("pchla2").style.backgroundColor="red";
document.getElementById("pchla2").innerHTML="skaczeR";
$('#pchla2').animate({
left: odleglosc + 'px'
});
document.getElementById("pchla3").style.backgroundColor="red";
document.getElementById("pchla3").innerHTML="skacze";
$('#pchla3').animate({
left: odleglosc + 'px'
});
document.getElementById("pchla4").style.backgroundColor="red";
document.getElementById("pchla4").innerHTML="skacze";
$('#pchla4').animate({
left: odleglosc + 'px'
});
document.getElementById("pchla5").style.backgroundColor="red";
document.getElementById("pchla5").innerHTML="skacze";
$('#pchla5').animate({
left: odleglosc + 'px'
});
document.getElementById("pchla6").style.backgroundColor="red";
document.getElementById("pchla6").innerHTML="skacze";
$('#pchla6').animate({
left: odleglosc + 'px'
});
document.getElementById("pchla7").style.backgroundColor="red";
document.getElementById("pchla7").innerHTML="skacze";
$('#pchla7').animate({
left: odleglosc + 'px'
});
document.getElementById("pchla8").style.backgroundColor="red";
document.getElementById("pchla8").innerHTML="skacze";
$('#pchla8').animate({
left: odleglosc + 'px'
});
}


function mySam()
{
document.getElementById("sam").innerHTML="Grasz sam^^ masz 60sek";
this.disabled=false;document.getElementById("multi1").disabled=true;
}

function myMulti()
{
document.getElementById("multi").innerHTML="Grasz multi... Pierwszy wygrywa";
this.disabled=false;document.getElementById("sam1").disabled=true;
}