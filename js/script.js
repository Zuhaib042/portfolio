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

// client-side-validation and local storage data
const form = document.getElementById('form');
const message = document.querySelector('.error-mesg');
const nameFull = document.getElementById('user_name');
const email = document.getElementById('email');
const textMessage = document.getElementById('textarea');

// save data in local storage
function saveData() {
  const obj = {
    name: nameFull.value,
    email: email.value,
    message: textMessage.value,
  };
  localStorage.setItem('data', JSON.stringify(obj));
}
form.addEventListener('submit', saveData);

// handle Submit
function handleSubmit(e) {
  e.preventDefault();
  if (/^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/g.test(email.value)) {
    form.submit();
    form.reset();
  } else {
    message.innerText = 'Email in lowercase is required';
  }
}
form.addEventListener('submit', (e) => {
  handleSubmit(e);
});

// getting data back on window load
window.addEventListener('load', () => {
  const dataB = JSON.parse(localStorage.getItem('data'));
  if (dataB) {
    nameFull.value = dataB.name;
    email.value = dataB.email;
    textMessage.value = dataB.message;
  }
});