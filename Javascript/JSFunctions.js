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
			$("body").css({
				'overflow':'visible'
			});
			$(".HiddenContent").removeClass("NavAnimationOpen");
			$(".HiddenContent").addClass("NavAnimationClose");
			setTimeout(function() {
						$(".HiddenNav").hide();
					}, 700);
			showed = false;
			setTimeout(function() {
				currentlyAnimating = false;
			}, 1000);		}
		else {
			if ($(window).width() <= 699) {
				$("body").css({
					'overflow':'hidden'
				});
			}
			$(".HiddenContent").removeClass("NavAnimationClose");
			$(".HiddenNav").show();
			$(".HiddenContent").addClass("NavAnimationOpen");
			setTimeout(function() {
				currentlyAnimating = false;
			}, 1000);
			showed = true;
		}
}
 $(window).resize(function(){
	 if ($(window).width() <= 699 && showed) {
		 $("body").css({
			 'overflow':'hidden'
		 });
	 }
		 else {
			 $("body").css({
				 'overflow':'visible'
			 });
		 }
 })
$(window).scroll(function(e){//#myName .bar1, .bar2, .bar3 bg white
		if (($(this).scrollTop() > $("#AboutMeSection").offset().top - 70)){
			 $("#myNameFixed").css('color','#8B6177');
			 $(".bar1, .bar2, .bar3").css("background-color", "#8B6177");
			 }
		else {
			$("#myNameFixed").css('color','white');
			$(".bar1, .bar2, .bar3").css("background-color", "white");
		}

});
