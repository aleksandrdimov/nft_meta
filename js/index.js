const iconMenu = document.querySelector(".burger");
const menuBurger = document.querySelector(".header__container");
const main = document.querySelector(".js-main");
arrNavItems = document.querySelectorAll(".nav__item");

if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    iconMenu.classList.toggle("js-active");
    menuBurger.classList.toggle("js-active");
  });
}

if (main) {
  main.addEventListener("click", function (e) {
    iconMenu.classList.remove("js-active");
    menuBurger.classList.remove("js-active");
  });
}

arrNavItems.forEach((el) => {
  el.addEventListener("click", function () {
    iconMenu.classList.remove("js-active");
    menuBurger.classList.remove("js-active");
  });
});

arrItemStory = document.querySelectorAll(".js-item-story");
arrItem = document.querySelectorAll(".js-item");

arrItem.forEach((el, index) => {
  el.addEventListener("click", function () {
    delStyle(arrItem);
    this.classList.add("js-active");
    let indexBtn = 0;
    indexBtn = index;
    delStyle(arrItemStory);
    arrItemStory[indexBtn].classList.add("js-active");
  });
});

arrQuestion = document.querySelectorAll(".js-question");
arrArrow = document.querySelectorAll(".js-question-arrow");
arrText = document.querySelectorAll(".js-question-text");
const close = document.querySelector(".js-close");

arrQuestion.forEach((el, index) => {
  el.addEventListener("click", function (e) {
    let indexArrow = 0;
    let indexText = 0;
    indexArrow = indexText = index;
    arrArrow[indexArrow].classList.toggle("js-active");
    arrText[indexText].classList.toggle("js-active");
    e.stopPropagation();
  });
});

close.addEventListener("click", function (event) {
  delStyle(arrArrow);
  delStyle(arrText);
});

function delStyle(item) {
  item.forEach((el) => {
    el.classList.remove("js-active");
  });
}
