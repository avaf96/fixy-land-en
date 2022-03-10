// JavaScript Document


$(document).ready(function(){
	$("#more-cm-btn").click(function(){
		$("#all-comments").toggleClass("d-none");
		if($("#all-comments").hasClass("d-none")){
			$("#more-cm-btn").text("more comments");
		}else{
			$("#more-cm-btn").text("less coments");
		}
	})

 });

		