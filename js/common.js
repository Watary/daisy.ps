function slider(){
	$('.slide').each(function(i,elem) {
		$(this).addClass( "hidden" );
		if ($(this).data('slide') == selectSlide) {
			$(this).removeClass( "hidden" );
		}
	});
}
function nextSlide(){
	if(selectSlide < countSlide){
		selectSlide++;
	}else{
		selectSlide = 1;
	}
	slider();
}
function prevSlide(){
	if(selectSlide > 1){
		selectSlide--;
	}else{
		selectSlide = countSlide;
	}
	slider();
}