"use strict";

const openNavButton = document.querySelector(".nav__open");
const closeNavButton = document.querySelector(".nav__close");
const modalBack = document.querySelector(".modal_back");
const navContent = document.querySelector(".nav__content");
const dropdownContainers = document.querySelectorAll(".dropdown__container");

const closeNav = () => {
  navContent.style.display = "";
  modalBack.style.display = "";
  document.body.style = "hidden";
};

openNavButton.addEventListener("click", () => {
  navContent.style.display = "flex";
  modalBack.style.display = "block";
  document.body.style.overflow = "hidden";
});
closeNavButton.addEventListener("click", closeNav);
modalBack.addEventListener("click", closeNav);
dropdownContainers.forEach((item) => {
  console.log(item);
  item.addEventListener("click", () => {
    if (innerWidth < 490) item.classList.toggle("active");
  });
});
