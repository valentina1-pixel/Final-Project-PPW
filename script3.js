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
});

