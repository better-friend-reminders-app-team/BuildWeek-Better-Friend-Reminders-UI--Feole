const toggleMenu = () => {
  menu.classList.toggle("menu--open");
};

const toggleBurger = () => {
  hamburger.classList.toggle("is-active");
};
const menuButton = document.querySelector(".hamburger");

const menu = document.querySelector(".menu");

// const menuButton = document.querySelector(".hamburger");
// console.log(menuButton);

menuButton.addEventListener("click", () => {
  toggleMenu();
});

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("is-active");
});
