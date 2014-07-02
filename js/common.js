head.ready(function() {

// slider

	function slider() {
		if ($('.slider').length) {	
			$('.slider__pager ul li:first-child').addClass('is-active');

			// vars
			var h = $(window).height();
			var slider = $('.slider');
			var item = $('.slider__list li');
			var next = $('.slider__next');
			var prev = $('.slider__prev');
			
			// autoheight
			slider.css('height', h);

			// slider__item visibility
			item.css('width', 0);
			$('.slider__list li:first-child').css('width', '100%');
			
			// slider nav
			next.on('click', function(){
				if ($('.slider__list li.is-active').next('li').length) {
					$('.slider__list li.is-active').removeClass('is-active').next('li').addClass('is-active').
					animate({
						width: '100%'
					}, 500);
					$('.slider__pager li[class = is-active]').removeClass('is-active').next().addClass('is-active');
				};

				return false;
			});
			prev.on('click', function(){
				if ($('.slider__list li.is-active').prev('li').length) {
					$('.slider__list li.is-active').removeClass('is-active').
					animate({
						width: '0%'
					}, 500, function(){
						$(this).prev('li').addClass('is-active');
					});

					$('.slider__pager li[class = is-active]').removeClass('is-active').prev().addClass('is-active');

				};
				return false;
			});

			//slider pager
			
			$('.slider__pager li a').on('click', function(){
				var slide = $(this).attr('data-slide');
				$('.slider__pager li').removeClass('is-active');
				$(this).parent().addClass('is-active');
				$('.slider__list li').removeClass('is-active');
				$('.slider__list li[data-slide = '+slide+']').addClass('is-active').animate({
					width: '100%'
				}, 500);
				return false;
			});

			

		};
	}
	slider();

// box layout

	function layout(){
		if ($('.box-wrap').length) {

			$('.box').each(function(){
				var h = $(this).outerWidth();
				
				if ($(this).hasClass('box_w')) {
					h = h*0.5;
				}
				if ($(this).hasClass('box_high')) {
					h = h*2;
				}

				$(this).css('height', h);
			});

		}
	}
	layout();

//resize function

	$(window).resize(function(){
		slider();
		layout();
	});
	
});