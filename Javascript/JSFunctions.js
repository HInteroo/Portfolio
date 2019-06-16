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
			}
			// else if ($(this).scrollTop() < $("#navicon").){
			// 		$("#navicon").css({
			// 			'margin-top' : '45px',
			// 		 });
			// 		 $("#myName").css({
			// 			 'margin-top' : '45px',
			// 			 'font-size' : '28px'
			// 			});
			//  }
			//  else if ($(this).scrollTop() < 60){
			// 		 $("#navicon").css({
			// 			 'margin-top' : '45px',
			// 			});
			// 			$("#myName").css({
			// 				'margin-top' : '45px',
			// 				'font-size' : '28px'
			// 			 });
			// 	}
});
