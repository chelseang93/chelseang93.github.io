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

$("#submit").click(function(){
	$("#about-container").jump();
});

$("#about-jump").on("click", function( e ) {

        e.preventDefault();

        $("body, html").animate({ 
            scrollTop: $( $(this).attr('href') ).offset().top 
        }, 600);

    });





});