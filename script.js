const menu = document.querySelector("#menu-btn");
const navbar = document.querySelector(".header .navbar");
const accordionsContainer = document.querySelector(".faqs .row");

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
});

const initializeSwipers = () => {
  const homeSwiper = new Swiper(".home-slider", {
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const roomSwiper = new Swiper(".room-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });

  const gallerySwiper = new Swiper(".gallery-slider", {
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 4,
      },
    },
  });
  const gallerySlider = document.querySelector(".gallery-slider");

  // Pause autoplay when the mouse enters the slider
  gallerySlider.addEventListener("mouseenter", () => {
    gallerySwiper.autoplay.stop();
  });

  // Resume autoplay when the mouse leaves the slider
  gallerySlider.addEventListener("mouseleave", () => {
    gallerySwiper.autoplay.start();
  });

  const reviewSwiper = new Swiper(".review-slider", {
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
};

initializeSwipers();

accordionsContainer.addEventListener("click", (event) => {
  const accordion = event.target.closest(".content .box");
  if (accordion) {
    const accordions = accordionsContainer.querySelectorAll(".content .box");
    accordions.forEach((subAccordion) =>
      subAccordion.classList.remove("active")
    );
    accordion.classList.add("active");
  }
});
