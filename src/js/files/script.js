// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

const counters = document.querySelectorAll(".item-counter__counter");
const speed = 5000;

if (counters) {
  counters.forEach((counter) => {
    const animate = () => {
      const value = +counter.getAttribute("akhi");
      const data = +counter.innerText;

      const time = value / speed;
      if (data < value) {
        counter.innerText = Math.ceil(data + time);
        setTimeout(animate, 15);
      } else {
        counter.innerText = value;
      }
    };

    animate();
  });
}

const serviesContent = document.querySelector(".servies-mobile__content");
const bodyItems = document.querySelectorAll(".body-servies-mobile__item");
const bodyCarts = document.querySelectorAll(".body-servies-mobile__cart");

bodyItems.forEach((el, index) => {
  if (window.matchMedia("(max-width: 767.98px)").matches) {
    el.addEventListener("click", (e) => {
      if (index % 2 == 0) {
        el.querySelector(".body-servies-mobile__cart").classList.toggle(
          "cart-mobile__right"
        );
      } else {
        el.querySelector(".body-servies-mobile__cart").classList.toggle(
          "cart-mobile__left"
        );
      }
    });
  }
});
