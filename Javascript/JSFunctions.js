var showed = false;
var currentlyAnimating = false;

function toggleNav(){
		if (currentlyAnimating) {
			return;
		}
		currentlyAnimating = true;

		var nav = document.getElementById("nav");
		nav.classList.toggle("navtoggle");
		if (showed) {
			$(".HiddenContent").removeClass("NavAnimationOpen");
			$(".HiddenContent").addClass("NavAnimationClose");
			$(".bar1, .bar2, .bar3").css("background-color", "white");
			setTimeout(function() {
						$(".HiddenNav").hide();
					}, 700);
			showed = false;
			setTimeout(function() {
				currentlyAnimating = false;
			}, 1000);		}
		else {
			$(".HiddenNav").show();
			$(".HiddenContent").removeClass("NavAnimationClose");
			$(".HiddenContent").addClass("NavAnimationOpen");
			setTimeout(function() {
				$(".bar1, .bar2, .bar3").css("background-color", "white");
			}, 550);
			setTimeout(function() {
				currentlyAnimating = false;
			}, 1000);
			showed = true;
		}
}

$(window).scroll(function(e){

		if ($(this).scrollTop() > 60){
			 $("#navicon").css({
				 'margin-top' : '30px'
			  });
				$("#myName").css({
					'margin-top' : '30px',
					'font-size' : '24px'
				 });
			 }
		 else if ($(this).scrollTop() < 60){
	 			 $("#navicon").css({
					 'margin-top' : '45px',
	 			  });
	 				$("#myName").css({
	 					'margin-top' : '45px',
	 					'font-size' : '28px'
	 				 });
				/* margin-top: 20px;
				font-size: 20px;
				font-weight: bold;
				margin-left: 40px;
				color: black;
				-webkit-text-fill-color: white;
				-webkit-text-stroke-width: 1px;
				-webkit-text-stroke-color: black; */
			}
});
// $(document).ready(function(){
//   var topOffsetOfBtns = $('nav').offset().top;       // get initial position of the element
//   var temp = topOffsetOfBtns;
//   var lastWidth = $(window).width();
//
//   $(window).scroll(function(){  //767-991 the topOffsetOfBtns changes to 871 otherwise 809
// 		var bottom = $(window).offset().top;
// 		alert(bottom);
// 		 // if($(window).width()!=lastWidth && $(window).width()>767 && $(window).width()<992){
//      //   topOffsetOfBtns = 811;
//      // }
//      // else{
//      //   topOffsetOfBtns = 749;
//      // }
//   });
// });
