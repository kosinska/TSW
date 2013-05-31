$(document).ready(function(){

$('#gamefield').append('<p id="target" style="background-color:blue; width:25px; height:25px;"></p>');//w polu gamefild towrzy pchelke	
var counter = 10; //licznik przeuwajacy pchelke
$('#target').mouseup(function() {
counter=counter+10;
//alert(counter);
$('#target').remove();
$('#gamefield').append('<p id="target" style="background-color:blue; width:25px; height:25px; margin-top: ' + counter + 'px;"></p>');	
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