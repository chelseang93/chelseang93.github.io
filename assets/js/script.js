$(document).ready(function(){

$("#login").click(function() {
		$("#modal-container").show();
	});

$("#submit").click(function() {
		$("#modal-container").hide();
	});

$("#cancel").click(function() {
		$("#modal-container").hide();
	});

$("#modal-overlay").click(function() {
		$("#modal-container").hide();
	});

$(".navbar-item").click(function(){
   alert("This page is still under construction!");
  });


$("#about").hover(function(){
    $("#about").css("background-color","#FFD6BF");
    },function(){
    $("#about").css("background-color","white");
  });

$("#news").hover(function(){
    $("#news").css("background-color","#FFD6BF");
    },function(){
    $("#news").css("background-color","white");
  });


});