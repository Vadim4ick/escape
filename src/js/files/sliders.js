/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, {
  Navigation,
  Pagination,
  Parallax,
  Autoplay,
  Lazy,
} from "swiper";
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Добавление классов слайдерам
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
function bildSliders() {
  //BildSlider
  let sliders = document.querySelectorAll(
    '[class*="__swiper"]:not(.swiper-wrapper)'
  );
  if (sliders) {
    sliders.forEach((slider) => {
      slider.parentElement.classList.add("swiper");
      slider.classList.add("swiper-wrapper");
      for (const slide of slider.children) {
        slide.classList.add("swiper-slide");
      }
    });
  }
}

let animationSwiper = {
  modules: [Navigation, Pagination, Parallax, Autoplay, Lazy],
  observer: true,
  observeParents: true,
  slidesPerView: 1,
  spaceBetween: 50,
  parallax: true,
  allowTouchMove: false,
  // loop: true,
  runCallbacksOnInit: false,
  hideOnClick: false,
  swipe: false,

  autoplay: {
    disableOnInteraction: false,
  },
  pagination: {
    el: ".animation-mobile__dotts",
    clickable: true,
  },
};

// Инициализация слайдеров
function initSliders() {
  // Добавление классов слайдера
  // при необходимости отключить
  bildSliders();

  if (document.querySelector(".animation-mobile__slider")) {
    let swiper = new Swiper(".animation-mobile__slider", {
      ...animationSwiper,
      on: {},
    });

    document.querySelector(".img0").setAttribute("src", "img/animation/1.gif");

    swiper.on("setTransition", function () {
      // if (swiper.realIndex === 0) {
      //   document
      //     .querySelector(".img0")
      //     .setAttribute("src", "img/animation/1.gif");
      // } else if (swiper.realIndex === 1) {
      //   document
      //     .querySelector(".img1")
      //     .setAttribute("src", "img/animation/2.gif");
      // } else if (swiper.realIndex === 2) {
      //   document
      //     .querySelector(".img2")
      //     .setAttribute("src", "img/animation/3.gif");
      // } else if (swiper.realIndex === 3) {
      //   document
      //     .querySelector(".img3")
      //     .setAttribute("src", "img/animation/4.gif");
      // }

      let activeSlide = document.querySelector(".swiper-slide-active img");
      const fileName = activeSlide.dataset.file;
      activeSlide.src = `img/animation/${fileName}`;
    });
  }

  if (document.querySelector(".marquee__slider")) {
    new Swiper(".marquee__slider", {
      modules: [Navigation, Pagination, Parallax, Autoplay],
      loop: true,
      slidesPerView: 8,
      spaceBetween: 30,
      allowTouchMove: false,
      autoplay: {
        delay: 0,
        reverseDirection: true,
      },
      speed: 1800,

      breakpoints: {
        320: {
          slidesPerView: 3,
        },
        360: {
          slidesPerView: 4,
        },
        400: {
          slidesPerView: 5,
        },
        480: {
          slidesPerView: 5,
        },
        530: {
          slidesPerView: 8,
        },
        768: {
          slidesPerView: 5,
        },
        992: {
          slidesPerView: 8,
        },

        1100: {
          slidesPerView: 8,
        },
        on: {},
      },
    });
  }

  if (window.matchMedia("(max-width: 767.98px)").matches) {
    if (document.querySelector(".logos-creating__slider")) {
      new Swiper(".logos-creating__slider", {
        modules: [Navigation, Autoplay],
        // loop: true,
        slidesPerView: 1.5,
        // parallax: true,
        effect: "fade",
        spaceBetween: 15,
        // autoplay: {
        //   delay: 1000,
        //   disableOnInteraction: false,
        // },

        speed: 500,
      });
    }

    if (document.querySelector(".section-logo__slider")) {
      new Swiper(".section-logo__slider", {
        modules: [Navigation, Autoplay],
        // loop: true,
        slidesPerView: 1.5,
        // parallax: true,
        effect: "fade",
        spaceBetween: 15,
        // autoplay: {
        //   delay: 1000,
        //   disableOnInteraction: false,
        // },

        speed: 500,
      });
    }
  }
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
  // Добавление классов слайдера
  // при необходимости отключить
  bildSliders();

  let sliderScrollItems = document.querySelectorAll(".swiper_scroll");
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar =
        sliderScrollItem.querySelector(".swiper-scrollbar");
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

window.addEventListener("load", function (e) {
  // Запуск инициализации слайдеров
  initSliders();
  // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
  //initSlidersScroll();
});
