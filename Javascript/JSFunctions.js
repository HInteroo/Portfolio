var showedNav = false;
var showedModal = false;
var currentlyAnimating = false;
var showedImageModal = false;
var title = ["Java Painting GUI", "Calendar Website", "A Set Game", "Java Chat GUI"];
var languages = ["Java", "HTML, CSS, Javascript, JQuery, PHP & mySQL", "Swift", "Java"];
var description = ["A painting GUI done using java.awt packages. Allows someone to draw lines, cricles, squares, pentagons, change colors, sizes and allows someone to write text with different font-styles. ",
 		"Developed a calendar in HTML which was done for a part of a website for a non-for-profit organization. Unfortunately, not implemented to the full functional website. Still loved the way it looked and had impress myself with my ability to learn new languages/techniques.",
  	"Developed a game called 'Set Game' to gain the experience of building my own custom view and handling custom multitouch gestures using Swift programming.",
	 	"A Chat messaging GUI done using java.awt, servers, server threads, sockets, and a chat client. Allows people connect onto a server that's being runned by ChatServer.java and allows people to message to eachother while connected to the server. Allows for private messaging."];
var idArray = ["GuiPainting", "CalendarHTML", "SwiftGame", "GuiChat"];
// GuiPainting CalendarHTML SwiftGame GuiChat
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
	if (!showedImageModal) {
		$(".Imagesmodal-content").removeClass("ModalAnimationOpen");
		$(".Imagemodal-content").addClass("ModalAnimationClose");
	}
	else{
		$(".modal-content").removeClass("ModalAnimationOpen");
		$(".modal-content").addClass("ModalAnimationClose");
	}
	setTimeout(function() {
		if (!showedImageModal) {
			$(".bg-modal").hide();
		}
		else{
			$(".Image-modal").hide();
			$( "div" ).remove(".your-class");
			$( "div" ).remove("#SmallDescription");
		}
		$('nav').css('z-index','9999');
		$("body").css({
			'overflow':'visible'
		});
	}, 200);
}

$(document).ready(function() {
	$(".HiddenContent").css('height',''+$(window).height()+'');
	$("#GreatestNerd").css('height',''+$(window).height()+'');
	$( "#GuiPainting, #CalendarHTML, #SwiftGame, #GuiChat" ).hover(
  function() {
			var self = this;
			$( self ).addClass( "ImageChanged" );
			$( self ).removeClass("ImageOriginal");
			$( self ).find(".CircleDescription").removeClass("DiscriptionDisappear");
			setTimeout(function() {
				$(self).find(".CircleDescription").addClass("DiscriptionAppear");
			}, 250);
	  }, function() {
			$(this).find(".CircleDescription").removeClass( "DiscriptionAppear" );
			$(this).find(".CircleDescription").addClass( "DiscriptionDisappear" );
			$( this ).removeClass( "ImageChanged" );
			$( this ).addClass( "ImageOriginal" );
	  }
	);
$(".CircleDescription").click(function(e) {
	showedImageModal = true;
	$( ".Imagemodal-content" ).append('<div class = "your-class"></div>');
	var id = $(this).parent().attr('id');
	var indexOfId = idArray.indexOf(id);
	for (var i = 0; i < 4; i++) {
		$( ".your-class" ).append('<div class = "Imgs"><img src="Images/'+id+'/'+id+(i+1)+'.jpg"></img></div>');
	}
	$( ".Imagemodal-content" ).append('<div id="SmallDescription"></div>');
	$( "#SmallDescription" ).append('<h3 id="ImageTitle">'+title[indexOfId]+'</h3>');
	$( "#SmallDescription" ).append('<p id="UsedLanguages"><strong class="Languages">Languages Used:</strong> '+languages[indexOfId]+'</p>');
	$( "#SmallDescription" ).append('<p id="Description"><strong class="DescriptionSubTitle">Description: </strong>'+description[indexOfId]+'</p>');
	// $( ".your-class" ).append('<div class = "Imgs"><img src="Images/'+id+'/'+id+(i+1)+'.jpg"></img></div>');
	// $( ".your-class" ).append('<div class = "Imgs"><img src="Images/'+id+'/'+id+(i+1)+'.jpg"></img></div>');
	// $( ".your-class" ).append('<div class = "Imgs"><img src="Images/'+id+'/'+id+(i+1)+'.jpg"></img></div>');
	// title languages description
	// <div id="SmallDescription">
	// 		<h3 id="ImageTitle">Chat Gui</h3>
	// 		<p id="UsedLanguages"><strong class="Languages">Languages Used:</strong> Java, Javascript, HTML, CSS</p>
	// 		<p id="Description"><strong class="DescriptionSubTitle">Description: </strong>A painting GUI done using java.awt packages. Allows someone to draw lines, cricles, squares, pentagons and allows someone to write text.
	// 		</p>
	// </div>
	$('.your-class').slick({
		dots: true,
		arrows: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000
		});
		$(".Imagesmodal-content").removeClass("ModalAnimationClose");
		$(".Imagemodal-content").addClass("ModalAnimationOpen");
		$('nav').css('z-index','2');
		$(".Image-modal").show();
		$("body").css({
			'overflow':'hidden'
		});
	});
});

 $(window).resize(function(){
	 $(".HiddenContent").css('height',''+$(window).height()+'');
	 $("#GreatestNerd").css('height',''+$(window).height()+'');
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
