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
const form = document.getElementById("form");
const message = document.querySelector(".error-mesg");

console.log(form["user_email"].value);
 form.addEventListener("submit",function (e){
   e.preventDefault();
   if(!form["user_email"].value.toLowerCase()){
     form.submit();
    }else{
      message.innerText = "Email in lowercase is required";
   }
 })