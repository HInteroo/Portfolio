var showedNav = false;
var showedModal = false;
var currentlyAnimating = false;

function toggleNav(){
		if (currentlyAnimating) {
			return;
		}
		$(".bg-modal").hide();
		currentlyAnimating = true;
		var nav = document.getElementById("nav");
		nav.classList.toggle("navtoggle");
		if (showedNav) {
			$("body").css({
				'overflow':'visible'
			});
			$(".HiddenContent").removeClass("NavAnimationOpen");
			$(".HiddenContent").addClass("NavAnimationClose");
			setTimeout(function() {
						$(".HiddenNav").hide();
					}, 700);
			showedNav = false;
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
			showedNav = true;
		}
}
function toggleContactModal(){
	$(".modal-content").removeClass("ModalAnimationClose");
	$(".modal-content").addClass("ModalAnimationOpen");
	$('nav').css('z-index','2');
	$(".bg-modal").show();
	$("body").css({
		'overflow':'hidden'
	});
}
function hideModal(){
	$(".modal-content").removeClass("ModalAnimationOpen");
	$(".modal-content").addClass("ModalAnimationClose");
	setTimeout(function() {
		$(".bg-modal").hide();
		$('nav').css('z-index','9999');
		$("body").css({
			'overflow':'visible'
		});
	}, 200);
}
 $(window).resize(function(){
	 if ($(window).width() <= 699 && showedNav) {
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
$(window).scroll(function(e){
		if (($(this).scrollTop() > $("#AboutMeSection").offset().top - 70)){
			 $("#myNameFixed").css('color','#4AD295');
			 $(".bar1, .bar2, .bar3").css("background-color", "#4AD295");
			 }
		else {
			$("#myNameFixed").css('color','white');
			$(".bar1, .bar2, .bar3").css("background-color", "white");
		}

});
