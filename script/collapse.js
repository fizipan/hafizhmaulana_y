const menu = document.querySelector(".menu-toggle input");
const ul = document.querySelector(".navigation");
const navbar = document.querySelector(".navbar-mobile");

menu.addEventListener("click", function () {
  ul.classList.toggle("slide");
});
