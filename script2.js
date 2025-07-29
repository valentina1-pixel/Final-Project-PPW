// Swiper Slider
const swiper = new Swiper(".swiper", {
  loop: true,
  spaceBetween: 40,
  slidesPerView: 3,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1024: { slidesPerView: 3 },
    768: { slidesPerView: 2 },
    480: { slidesPerView: 1 },
  },
});

// Navbar Toggle
const menuOpenBtn = document.getElementById("menu-open-button");
const menuCloseBtn = document.getElementById("menu-close-button");
const navMenu = document.querySelector(".nav-menu");

menuOpenBtn.addEventListener("click", () => {
  navMenu.classList.add("open");
});

menuCloseBtn.addEventListener("click", () => {
  navMenu.classList.remove("open");
});
