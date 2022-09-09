// variables
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('menu');
const links = document.querySelectorAll('.mobileNav-links');

// mobile-menu functionality

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

// client-side-validation
const form = document.getElementById('form');
const message = document.querySelector('.error-mesg');
const email = document.getElementById('email');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (/^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/g.test(email.value)) {
    form.submit();
    form.reset();
  } else {
    message.innerText = 'Email in lowercase is required';
  }
});

// local storage
const nameFull = document.getElementById('user_name').value;
const valueEmail = email.value;
const textMessage = document.getElementById('textarea').value;

const object = {name: nameFull, email: valueEmail, message: textMessage};
const local = localStorage.setItem('data', object);
function saveData() {}

// const objectStore = JSON.stringify(object);
