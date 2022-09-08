// mobile-menu variables
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('menu');
const links = document.querySelectorAll('.mobileNav-links');

// mobile-menu functionality
const hamToggle = function () {
  hamburger.classList.toggle('initiate');
  mobileMenu.classList.toggle('hidden');
  mobileMenu.classList.toggle('d-flex');
};

// // hamburger menu functionality
hamburger.addEventListener('click', hamToggle);

// mobile-menu links functionality
links.forEach((link) => {
  link.addEventListener('click', hamToggle);
});
