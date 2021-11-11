const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-menu__link");
const arrowPrev = document.querySelector('.arrow-prev');
const arrowNext = document.querySelector('.arrow-next');

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.contains('active') ? closeMenu() : showMenu();
}

navLink.forEach(n => n.addEventListener("click", closeMenu));

function showMenu() {
  hamburger.classList.add("active");
  navMenu.classList.add("active");
  document.body.style['overflow-y'] = 'hidden';
}

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  document.body.style['overflow-y'] = 'auto';
}

$('.slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: arrowPrev,
  nextArrow: arrowNext,
  dots: true,
});
