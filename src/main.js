import * as bootstrap from "bootstrap";
window.bootstrap = bootstrap;

import ScrollReveal from "scrollreveal";

document.addEventListener("DOMContentLoaded", function () {

  // ScrollReveal animations
  const sr = ScrollReveal({
    duration: 1000,
    origin: "top",
    distance: "50px",
    easing: "ease-in-out",
    reset: false,
  });

  sr.reveal(".scroll-reveal");
  sr.reveal(".scroll-reveal-bottom", {
    origin: "bottom",
    distance: "100px",
  });
  sr.reveal(".scroll-reveal-left", {
    origin: "left",
  });
  sr.reveal(".scroll-reveal-left-step-1", {
    origin: "left",
    distance: "100px",
  });
  sr.reveal(".scroll-reveal-left-step-2", {
    origin: "left",
    distance: "150px",
  });
  sr.reveal(".scroll-reveal-right", {
    origin: "right",
  });
  sr.reveal(".scroll-reveal-top", {
    origin: "top",
  });
  sr.reveal(".scroll-reveal-scale", {
    scale: 0.3,
    duration: 1200,
  });
  sr.reveal(".scroll-reveal-scale-end", {
    scale: 1.3,
    duration: 1200,
  });
  sr.reveal(".scroll-reveal-fade", {
    opacity: 0,
    distance: "30px",
  });

  // Get the navbar element outside of the function so it can be reused
  const navbar = document.querySelector(".navbar");

  function handleScroll() {
    const footer = document.getElementById("footer");
    const scrollToTop = document.getElementById("scroll-to-top");
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add("navbar-scrolled");
      } else {
        navbar.classList.remove("navbar-scrolled");
      }
    }
    // Ensure footer and scroll-to-top elements exist before using them
    if (footer && scrollToTop) {
      const footerPosition = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (footerPosition.top < windowHeight) {
        scrollToTop.classList.remove("d-none");
      } else {
        scrollToTop.classList.add("d-none");
      }
    }
  }
  window.addEventListener("scroll", handleScroll);
});

/* CountUp.js */
import {
  CountUp
} from "countup.js";
document.querySelectorAll(".countup").forEach((el) => {
  const value = parseInt(el.dataset.value);
  if (!isNaN(value)) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counter = new CountUp(el, value);
            if (!counter.error) {
              counter.start();
              obs.unobserve(el);
            } else {
              console.error(counter.error);
            }
          }
        });
      }, {
        threshold: 0.6,
      }
    );

    observer.observe(el);
  }
});
/* CountUp.js - End */

//Custom Dropdown
document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".custom-dropdown-menu");

  dropdowns.forEach(function (dropdown) {
    const toggle = dropdown.querySelector(".dropdown-toggle");
    const menu = dropdown.querySelector(".dropdown-menu");

    let clickedOnce = false;

    dropdown.addEventListener("mouseenter", () => {
      if (window.innerWidth >= 1200) {
        toggle.classList.add("show");
        menu.classList.add("show");
      }
    });

    dropdown.addEventListener("mouseleave", () => {
      if (window.innerWidth >= 1200) {
        toggle.classList.remove("show");
        menu.classList.remove("show");
      }
    });

    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      if (window.innerWidth >= 1200) {
        return (window.location.href = toggle.getAttribute("href"));
      } else {
        if (!clickedOnce) {
          toggle.classList.add("show");
          menu.classList.add("show");
          clickedOnce = true;
        } else {
          window.location.href = toggle.getAttribute("href");
        }
      }
    });
  });

  // Alt menü (dropdown-submenu) için yeni kod
  const subDropdowns = document.querySelectorAll(".dropdown-submenu");

  subDropdowns.forEach(function (subDropdown) {
    const subToggle = subDropdown.querySelector(".dropdown-toggle");
    const subMenu = subDropdown.querySelector(".dropdown-menu");

    // Masaüstü ekranlarda hover ile açılmasını sağlar
    if (window.innerWidth >= 1200) {
      subDropdown.addEventListener("mouseenter", () => {
        subToggle.classList.add("show");
        subMenu.classList.add("show");
      });

      subDropdown.addEventListener("mouseleave", () => {
        subToggle.classList.remove("show");
        subMenu.classList.remove("show");
      });
    }

    // Mobil cihazlarda tıklama ile açılmasını sağlar
    subToggle.addEventListener("click", function (e) {
      if (window.innerWidth < 1200) {
        e.preventDefault(); // Linke gitmeyi engelle
        subToggle.classList.toggle("show");
        subMenu.classList.toggle("show");
      }
    });
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
});

// Gözlemlemek istediğin tüm elementleri seç:
const observerImageBox = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observerImageBox.unobserve(entry.target);
    }
  });
});
document
  .querySelectorAll(".image-box")
  .forEach((el) => observerImageBox.observe(el));

//Proje Detay
import Swiper from "swiper/bundle";
const swiper = new Swiper(".produtCarouselSlider", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  speed: 500,
  effect: "coverflow",
  navigation: {
    nextEl: ".carousel-control-next",
    prevEl: ".carousel-control-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
  },
});


const swiperHeroSlider = new Swiper('.heroSliderSwiper', {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-prev-custom",
    prevEl: ".swiper-button-next-custom",
  },
  on: {
    slideChange: function () {
      const activeSlide = this.slides[this.activeIndex];
      const videoElement = activeSlide.querySelector('.swiper-video');
      const slideType = activeSlide.getAttribute('data-slide-type');

      // Önceki slayttaki videoyu durdur
      const prevVideo = this.slides[this.previousIndex].querySelector('.swiper-video');
      if (prevVideo) {
        prevVideo.pause();
        prevVideo.currentTime = 0; // Videoyu başa sar
      }

      if (slideType === 'video' && videoElement) {
        // Video slaytı ise
        videoElement.play().catch(e => console.error("Video otomatik oynatılamadı:", e));
        this.autoplay.stop(); // Swiper'ın otomatik geçişini durdur

        videoElement.onended = () => {
          this.slideNext(); // Video bitince bir sonraki slayta geç
          this.autoplay.start(); // Swiper'ın otomatik geçişini tekrar başlat
        };
      } else {
        // Görsel slaytı ise
        // Otomatik oynatmayı 5 saniye olarak ayarla
        this.autoplay.start();
        this.autoplay.delay = 5000;
      }
    }
  }
});

// Sayfa yüklendiğinde çalışacak kod
document.addEventListener('DOMContentLoaded', function () {
  new Swiper('.product-slider-container', {
    slidesPerView: 4, // Görünürdeki slayt sayısı
    spaceBetween: 20, // Slaytlar arası boşluk (piksel cinsinden)
    loop: true, // Sonsuz döngü
    navigation: {
      nextEl: '.next-btn',
      prevEl: '.prev-btn',
    },
    breakpoints: {
      275: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // Ekran genişliği 992px'den küçükse 3 slayt göster
      992: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      // Ekran genişliği 1200px'den küçükse 4 slayt göster
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
});