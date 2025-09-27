const header = document.querySelector(".header");
let scrollDown = window.scrollY;
const hamburgerIcon = document.querySelector(".hamburger-icon");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const closeMenu = document.querySelector(".close-menu");

window.addEventListener("scroll", () => {
  if (window.scrollY > scrollDown) {
    // scrolling down
    header.classList.add("hide");
  } else {
    //scrolling up
    header.classList.remove("hide");
    if (window.scrollY > 50) {
      header.classList.add("border");
    } else {
      header.classList.remove("border");
    }
  }
  scrollDown = window.scrollY;
});
hamburgerIcon.addEventListener("click", () => {
  document.body.classList.toggle("menu-open");
  closeMenu.classList.toggle("display");
  hamburgerIcon.classList.toggle("no-display");
  hamburgerMenu.classList.toggle("display");
});
closeMenu.addEventListener("click", () => {
  document.body.classList.toggle("menu-open");
  closeMenu.classList.toggle("display");
  hamburgerIcon.classList.toggle("no-display");
  hamburgerMenu.classList.toggle("display");
});
