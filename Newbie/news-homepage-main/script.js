const toggleMenu = document.querySelector(".toggle-menu");
const closeMenu = document.querySelector(".close-menu");
const menu = document.querySelector(".menu");

toggleMenu.addEventListener("click", function () {
  menu.classList.add("show");
  closeMenu.classList.add("show");
});

closeMenu.addEventListener("click", function () {
  menu.classList.remove("show");
  closeMenu.classList.remove("show");
});
