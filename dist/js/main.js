$(function () {
	//Input search
	$('.label-search').click(function(){
		if ($('.form-control').css('visibility') == 'hidden'){
			$('.form-control').css({'visibility': 'visible'});
		} else{
			$('.form-control').css({'visibility': 'hidden'});
		}
	});
	//Slick slider
	$('.slider').slick({
  		arrows: false,
  		dots: true,
  		customPaging :  function(slider, i) {
							var thumb = $(slider.$slides[i]).data();
							return '<a>'+(i+1)+'</a>';
						}	
  	});
});