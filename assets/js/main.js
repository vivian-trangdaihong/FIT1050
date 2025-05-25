/*
	Solid State by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
// import Swiper JS
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

// import Swiper styles
import 'swiper/swiper-bundle.min.css';
import 'swiper/modules/navigation.min.css';
(function($) {
			const swiper = new Swiper(".mySwiper", {
				loop: true,
				navigation: {
				  nextEl: ".swiper-button-next",
				  prevEl: ".swiper-button-prev",
				},
				breakpoints: {
				  320: {
					slidesPerView: 1,
					spaceBetween: 10,
				  },
				  768: {
					slidesPerView: 2,
					spaceBetween: 20,
				  },
				  1024: {
					slidesPerView: 3,
					spaceBetween: 30,
				  },
				},
			  });

})(jQuery);

  