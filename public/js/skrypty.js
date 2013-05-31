$(document).ready(function () {

var counter = 0;
var pchelka = '<div id="target" class="target" style="background-color:red; width:20px; height:20px; border-radius: 50%; position: relative; "></div>';
$('#gamefield').append(pchelka);
$('#target').mousedown(function(){
counter = 0;
$('#target') = setInterval(function(){counter += 5;}, 1000);
return false;
});
$("#target").mouseup(function(){
$(".target").animate({"left": "+=" + counter + "px"}, "slow");
});

});

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