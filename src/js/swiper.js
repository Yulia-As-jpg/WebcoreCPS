import {width} from './variables';


let swiper;
let init = false;


function swiperCard() {
  if (width <= 767) {
    if (!init) {
      init = true;
      swiper = new Swiper(".swiper", {
        direction: "horizontal",
        freeMode: true,
        centeredSlides: true,
        spaceBetween: 0,
 

        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }
  } else if (init && swiper && swiper.destroy) {
    swiper.destroy(true, true); 
    init = false;
  }
}


swiperCard();


window.addEventListener("resize", swiperCard);


