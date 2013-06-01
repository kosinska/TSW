$(document).ready(function () {

//var licznik = 0;

var pchelka = '<div onmousedown="mDown()" onmouseup="mUp()" id="pchla" class="pchla" style="background-color:#EE6363; width:22px; height:22px; border-radius: 50%; position: relative; -moz-box-shadow: 0 0 5px 5px #CD5555; -webkit-box-shadow: 0 0 5px 5px #CD5555; box-shadow: 0 0 5px 5px #CD5555;">pch</div>';

$('#gamefield').append(pchelka);

/*$('#pchla').mousedown(function(){
licznik = 0;
$('#pchla') = setInterval(function(){licznik += 5;}, 1000);
return false;
});
$("pchla").mouseup(function(){
$("div").animate({left: 'left "+=" + licznik + "px"}, "slow");
});*/


});

function mDown(){
document.getElementById("pchla").style.backgroundColor="blue";
document.getElementById("pchla").innerHTML="RM";
//var licznik =0;
//document.getElementById("pchla").setInterval(function(){licznik += 5;}, 1000);
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