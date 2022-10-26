$(function() {

	configSlideBar();
	function configSlideBar() {
		var currentValue = 100;
		var isDrag = false;
		var maxPrice = 70000.00;
		var currentPrice = 70000.00;

		$('body').on('mousedown', '.price-bar', function() {
			isDrag = true;
			disableTextSelection();
		});

		$('body').on('touchstart', '.price-bar', function() {
			isDrag = true;
			disableTextSelection();
		});

		$('body').on('mouseup', '', function() {
			isDrag = false;
			enableTextSelection();
		});

		$('body').on('touchend', '', function() {
			isDrag = false;
			enableTextSelection();
		});

		$('html, body').on('mousemove', '', function(event) {
			if (isDrag) {
				var el = $('.price-bar');
				var mouseX = event.pageX - el.offset().left;
				if (mouseX < 0) mouseX = 0;
				if (mouseX >= el.width()) mouseX = el.width();
				currentValue = mouseX / el.width() * 100;
				
				$('.price-bar-fill').css('width', currentValue+'%');
				$('.price-bar-pointer').css('left', 'calc('+currentValue+'% - 9px)');

				currentPrice = currentValue / 100 * maxPrice;
				currentPrice = formatPrice(currentPrice);
				$('.average-price p').eq(0).html(currentPrice);
			}
		});

		$('html, body').on('touchmove', '', function(event) {
			if (isDrag) {
				event.preventDefault();
				var el = $('.price-bar');
				var touch = event.originalEvent.touches[0] || event.originalEvent.changedTouches[0];
				var mouseX = touch.pageX - el.offset().left;
				if (mouseX < 0) mouseX = 0;
				if (mouseX >= el.width()) mouseX = el.width();
				currentValue = mouseX / el.width() * 100;
				
				$('.price-bar-fill').css('width', currentValue+'%');
				$('.price-bar-pointer').css('left', 'calc('+currentValue+'% - 9px)');

				currentPrice = currentValue / 100 * maxPrice;
				currentPrice = formatPrice(currentPrice);
				$('.average-price p').eq(0).html(currentPrice);
			}
		});

		$('body').on('click', '.price-bar', function() {
			var el = $(this);
			var mouseX = event.pageX - el.offset().left;
			if (mouseX < 0) mouseX = 0;
			if (mouseX >= el.width()) mouseX = el.width();
			currentValue = mouseX / el.width() * 100;

			$('.price-bar-fill').css('width', currentValue+'%');
			$('.price-bar-pointer').css('left', 'calc('+currentValue+'% - 9px)');

			currentPrice = currentValue / 100 * maxPrice;
			currentPrice = formatPrice(currentPrice);
			$('.average-price p').eq(0).html(currentPrice);
		});

		initBars();
		function initBars() {
			$('.average-price p').eq(1).html(formatPrice(maxPrice));

			$('.price-bar-fill').css('width', currentValue+'%');
			$('.price-bar-pointer').css('left', 'calc('+currentValue+'% - 9px)');

			currentPrice = maxPrice;
			currentPrice = formatPrice(currentPrice);
			$('.average-price p').eq(0).html(currentPrice);
		}

		function formatPrice(value) {
			value = value.toFixed(2);
			valueArr = value.split('.');

			if (valueArr[0] >= 1000 && valueArr[0] < 10000) {
				valueArr[0] = valueArr[0].substr(0, 1) + '.' + valueArr[0].substr(1, valueArr[0].length)
			}
			if (valueArr[0] >= 10000 && valueArr[0] < 100000) {
				valueArr[0] = valueArr[0].substr(0, 2) + '.' + valueArr[0].substr(2, valueArr[0].length)
			}
			if (valueArr[0] >= 100000 && valueArr[0] < 1000000) {
				valueArr[0] = valueArr[0].substr(0, 3) + '.' + valueArr[0].substr(3, valueArr[0].length)
			}
			if (valueArr[0] >= 1000000 && valueArr[0] < 10000000) {
				valueArr[0] = valueArr[0].substr(0, 1) + '.' + valueArr[0].substr(1, 3) + '.' + valueArr[0].substr(4, valueArr[0].length)
			}

			return 'R$'+valueArr[0]+','+valueArr[1];
		}

		function disableTextSelection() {
			$('body').css('user-select', 'none');
		}

		function enableTextSelection() {
			$('body').css('user-select', 'auto');
		}
	}

	//Sale

	configSalePage();
	function configSalePage() {
		var current = 0;
		var max = $('.vehicle-info-gallery-image').length - 1;
		var delay = 500;

		initGallery();
		function initGallery() {
			var parentWidth = $('.vehicle-info-gallery').css('width');
			
			$('.vehicle-info-gallery-image')
				.css('width', 'calc('+parentWidth+' / 3)')
				.css('height', 'calc('+parentWidth+' / 5)');	

			$(window).resize(function() {
				parentWidth = $('.vehicle-info-gallery').css('width');
				$('.vehicle-info-gallery-image')
					.css('width', 'calc('+parentWidth+' / 3)')
					.css('height', 'calc('+parentWidth+' / 5)');
			});
		}

		arrowLeftClick();
		function arrowLeftClick() {
			$('body').on('click', '.arrow-left-gallery', function() {
				current -= 3;
				if (current < 0) current = 0;
				var offsetX = $('.vehicle-info-gallery-image').eq(current).offset().left - $('.vehicle-info-gallery-wrapper').offset().left;

				$('.vehicle-info-gallery').stop().animate({'scrollLeft':offsetX}, delay);
			});
		}
		

		arrowRightClick();
		function arrowRightClick() {
			$('body').on('click', '.arrow-right-gallery', function() {
				current += 3;
				if (current > max ) current = max;
				var offsetX = $('.vehicle-info-gallery-image').eq(current).offset().left - $('.vehicle-info-gallery-wrapper').offset().left;

				$('.vehicle-info-gallery').stop().animate({'scrollLeft':offsetX}, delay);
			});
		}

		imageClick();
		function imageClick() {
			$('body').on('click', '.vehicle-info-gallery-image', function() {
				var image = $(this).children(1).css('background-image');
				$('.vehicle-info-image').css('background-image', image);
				$('.vehicle-info-gallery-image').css('background-color', 'white');
				$(this).css('background-color', 'gray');
			});
			$('.vehicle-info-gallery-image').eq(0).click();
		}
	} 

	//Goto contato

	configGotoContact();
	function configGotoContact() {
		var dir = '/Curso%20Webmaster/Projetos/Projeto-05/';

		$('body').on('click', '[goto="contato"]', function() {
			location.href = dir + 'home?contato';
			return false;
		});

		checkUrl();
		function checkUrl() {
			var url = location.href.split('/');
			var curPage = url[url.length - 1].split('?');

			if (curPage[1] == 'contato') {
				$('header nav a').css('color', 'black');
				$('footer nav a').css('color', 'white');
				$('[goto="contato"]').css('color', '#ec2d2f');
				$('html, body').animate({'scrollTop':$('.contact').offset().top});
			} else {
				$('header nav a').css('color', 'black');
				$('footer nav a').css('color', 'white');
				$('a[href='+curPage[0]+']').css('color', '#ec2d2f');
			}
		}
	}

	//Responsive menu

	configResponsiveMenu();
	function configResponsiveMenu() {
		var menuVisible = false;

		$('body').on('click', '.menu-mobile-icon', function() {
			if (!menuVisible) {
				$(this).css('background-image', 'url("images/close.png")');
				$('.menu-mobile-icon ul').css('height', 'calc(100vh - 115px)').css('visibility', 'visible');
				menuVisible = true;
			} else {
				$(this).css('background-image', 'url("images/icon_menu.png")');
				$('.menu-mobile-icon ul').css('height', '0').css('visibility', 'hidden');
				menuVisible = false;
			}
		});
	}

	//Testimonial

	configTestimonial();
	function configTestimonial() {
		var current = 0;
		var max = $('.testimonial p').length - 1;

		selectTestimonial();
		function selectTestimonial() {
			for (var i=0; i<$('.testimonial p').length; i++) {
				if (i != current) {
					$('.testimonial p').eq(i).css('display', 'none');
					$('.testimonial .navigation span').eq(i).css('display', 'none');
				} else {
					$('.testimonial p').eq(i).css('display', 'block');
					$('.testimonial .navigation span').eq(i).css('display', 'block');
				}
			}
		}

		$('body').on('click', '[prev]', function() {
			current--;
			if (current < 0) {
				current = max;
			}
			selectTestimonial();
		});
		
		$('body').on('click', '[next]', function() {
			current++;
			if (current > max) {
				current = 0;
			}
			selectTestimonial();
		});
	}

});