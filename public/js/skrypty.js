$(document).ready(function () {

var pchelka = '<div onmousedown="mDown()" onmouseup="mUp()" id="pchla" class="pchla">pch</div>';
var pudelko = '<div id="pudlo" class="pudlo">pud</div>';

$('#gamefield').append(pchelka);
$('#gamefield').append(pudelko);

});

function mDown(){
document.getElementById("pchla").style.backgroundColor="blue";
document.getElementById("pchla").innerHTML="RM";
}

var odleglosc=0;

function mUp(){
console.log(odleglosc);
console.trace();
odleglosc += 50;
if(odleglosc >= 300) odleglosc = 300;
document.getElementById("pchla").style.backgroundColor="red";
document.getElementById("pchla").innerHTML="skacze";
$('#pchla').animate({
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