/*
	Solid State by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
window.addEventListener("DOMContentLoaded", function () {
		const swiper = new Swiper('.swiper', {
        
			loop: true,
			 autoplay: {
			  delay: 5000,
			  disableOnInteraction: false,
			},
			
			pagination: {
			  el: '.swiper-pagination',
		
			},
			navigation: {
			  nextEl: '.swiper-button-next',
			  prevEl: '.swiper-button-prev',
			},
			scrollbar: {
			el: '.swiper-scrollbar',
		  },
		   breakpoints: {
				640: {
				  slidesPerView: 1,
				  spaceBetween: 20,
				},
				768: {
				  slidesPerView: 2,
				  slidesPerGroup: 2,
				  spaceBetween: 40,
				},
				1024: {
				  slidesPerView: 4,
				  slidesPerGroup: 2,
				  spaceBetween: 50,
				},
			  },
		  });

		}
);