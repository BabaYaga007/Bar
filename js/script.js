$(function () {

	$("#navbarToggle").blur(function(event){
		var screenWidth=window.innerWidth;
		if(screenWidth<767) {
			$("#collapsable-nav").collapse('hide');
		}
	});

});
// $ sign before a function does same as document.addEventListener("DOMContentLoaded"...
// $ sign is also used as document.querySelector("#navbarToggle").addEventListener("blur,..