$(document).ready(function(t){function e(){var t=document.getElementById("myCanvas");if(t.getContext){var e=t.getContext("2d"),a=new Image,n=t.width/2,o=t.height/2;a.onload=function(){e.translate(n,o),e.rotate(180*Math.PI/180),e.drawImage(a,-n,-o)},a.src="src/img/photoTest.jpg"}else alert("Kann nicht Canvas urgh!")}e()});var hallo2="hallo 2";console.log("test 2"+hallo2);