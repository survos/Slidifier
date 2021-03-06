var slides;
var slideCounter;

$(document).ready(function() {
	$("#slide").hide();
	
	$('#srcForm textarea').TextAreaResizer();
	
	updateClock();
	setInterval('updateClock()', 1000*60);
	
	// for debugging only:
	slides = $('textarea[name=slides_src]').val();
	slides = processSlideSource(slides);
	// end 
	
	$("#srcForm").submit(function() {
		slides = $('textarea[name=slides_src]').val();
		slides = processSlideSource(slides);
		
		if (isIE()) {
			for (var i in slides) {
				slides[i] = slides[i].replace(/\n/g, "<br/>");
			}
		}
		
		slideCounter = 0;
		
		refresh();
		
		loadTheme();
		
		$("#slideEdit").fadeOut(10, function() {
			$("#slide").fadeIn(1000, function() {
				$("#help").slideDown("slow", function() {
					setTimeout(function() {
						$("#help").slideUp("slow");
					}, 3000);
				});
			});
		});
		
		return false;
	});

});

function isIE() {
	if (navigator.userAgent.indexOf('MSIE') !=-1) {
		return true;
	}
	return false;
}