const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('menu');
const links = document.querySelectorAll('.mobileNav-links');

// // hamburger menu functionality
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('initiate');
  mobileMenu.classList.toggle('hidden');
  mobileMenu.classList.toggle('d-flex');
});

// mobile-menu links functionality
links.forEach((link) => {
  link.addEventListener('click', () => {
    hamburger.classList.toggle('initiate');
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('d-flex');
  });
});