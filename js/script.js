// import images as relative image path won't work with vite/vercel.
import check from '../assets/check.svg'
import star from '../assets/star.svg'
import sushi12 from '../assets/sushi-12.png'
import sushi11 from '../assets/sushi-11.png'
import sushi10 from '../assets/sushi-10.png'

import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
    duration: 1000,
    offset: 100,
});

// Card click interaction
const foodCards = document.querySelectorAll(".popular-foods__card");

foodCards.forEach((card) => {
  card.addEventListener("click", () => {
    // remove active class from all cards
    foodCards.forEach((c) => c.classList.remove("active-card"));

    // add active class to clicked card
    card.classList.add("active-card");
  });
});

// Filter button active state
const filterBtns = document.querySelectorAll(".popular-foods__filter-btn");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Mobile menu toggle
const mobileMenu = document.querySelector(".header__menu-mobile");
const headerMenu = document.querySelector(".header__menu");

if (mobileMenu) {
  mobileMenu.addEventListener("click", () => {
    if (headerMenu) {
      headerMenu.classList.toggle("show-mobile-menu");
    }
  });
}

// How to Order modal
const orderModal = document.getElementById("orderModal");
const playButton = document.querySelector(".hero-content__play-button");
const closeModal = document.getElementById("closeModal");
const modalOrderNow = document.getElementById("modalOrderNow");

function openModal() {
  orderModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModalFn() {
  orderModal.classList.remove("active");
  document.body.style.overflow = "";
}

if (playButton) {
  playButton.addEventListener("click", openModal);
}

if (closeModal) {
  closeModal.addEventListener("click", closeModalFn);
}

// Close on backdrop click
if (orderModal) {
  orderModal.addEventListener("click", (e) => {
    if (e.target === orderModal) {
      closeModalFn();
    }
  });
}

// Close on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && orderModal.classList.contains("active")) {
    closeModalFn();
  }
});

// "Order Now" inside modal scrolls to menu
if (modalOrderNow) {
  modalOrderNow.addEventListener("click", () => {
    closeModalFn();
    setTimeout(() => {
      const menuSection = document.getElementById("menu");
      if (menuSection) {
        menuSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300);
  });
}
