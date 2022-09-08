// mobile-menu variables
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('menu');
const links = document.querySelectorAll('.mobileNav-links');

// modal variables
const modalBg = document.querySelector('.modal-bg');
// const modal = document.getElementById('modal');
const btnWorks = document.querySelectorAll('.project');
const workSection = document.getElementById('portfolio');
const modalClose = document.querySelector('.modal-close');
const modalContent = document.getElementById('modal-content');
const modalTitle = document.querySelector('.modal-title h2');
const modalImage = document.getElementById('modal-img');
const modalDetails = document.querySelector('.modal-details');
const modalDec = document.getElementById('modal-dec');
const body = document.querySelector('body');
const btnLive = document.getElementById('btn-live');
const btnSource = document.getElementById('btn-source');
const langs = document.querySelector('#langs');
const actions = document.querySelector('#actions');
console.log(workSection);
// dynamic project data
let works = [
  {
    id: 1,
    name: 'Tonic',
    subTitle: ['CANOPY', 'front-end', 2015],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required',
    technologies: ['html', 'css', 'javascript'],
    image: './images/portfolio-img4.jpg',
    source: '#',
    liveLink: '#',
  },
  {
    id: 2,
    name: 'Multi-Post Stories',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required',
    technologies: ['html', 'css', 'javascript'],
    image: './images/portfolio-img1.jpg',
    source: '#',
    liveLink: '#',
  },
  {
    id: 3,
    name: 'Tonic',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required',
    technologies: ['html', 'css', 'javascript'],
    image: './images/portfolio-img2.jpg',
    source: '#',
    liveLink: '#',
  },
  {
    id: 4,
    name: 'Multi-Post Stories',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required',
    technologies: ['html', 'css', 'javascript'],
    image: './images/portfolio-img3.jpg',
    source: '#',
    liveLink: '#',
  },
];

const langsUl = document.createElement('ul');

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

// dynamic works
works.forEach((work) => {
  const eachwork = document.createElement('div');
  eachwork.innerHTML = `<article class="d-flex flex-column card" id=${work.id}>
    <div class="card-image">
        <img src=${work.image}>
    </div>
    <div class="card-content">
        <div class="primary-text">
            <h2>${work.name}</h2>
            <div class="frame d-flex">
                <h6>CANOPY</h6>
                <div class="circle"></div>
                <p>Back End Dev</p>
                <div class="circle"></div>
                <p>2015</p>
            </div>
            <p>A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
        </div>
        <ul class="tags d-flex list-none">
            <li>${work.technologies[0]}</li>
            <li>${work.technologies[1]}</li>
            <li>${work.technologies[2]}</li>
        </ul>
        <div class="action">
            <button class="btn project" type="button" id=${work.id} data-tab=${work.id}>See Project</button>
        </div>
    </div>
  </article>`;
  workSection.append(eachwork);
});

console.log(btnWorks);
// modal window functionality
const modalFill = function (id) {
  modalTitle.innerText = works[id].name;

  modalImage.src = works[id].image;
  modalDetails.innerText = works[id].description;
  modalDetails.style.color = '#344563';
};

// modalFill();

btnWorks.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    modalBg.classList.remove('hidden');
    modal.classList.remove('hidden');
    body.classList.add('active');
    modalFill(Array.prototype.indexOf.call(btnWorks, btn));
    console.log(e.target.dataset.tab);
  });
});

modalClose.addEventListener('click', () => {
  modalBg.classList.add('hidden');
  modal.classList.add('hidden');
  body.classList.remove('active');
});

// projects array

// let i = 0;
// while (i < projects.length) {
//   workSection.innerHTML += `<article class="d-flex flex-column card" id=${projects[i].id}>
//   <div class="card-image">
//       <img src=${projects[i].image}>
//   </div>
//   <div class="card-content">
//       <div class="primary-text">
//           <h2>${projects[i].name}</h2>
//           <div class="frame d-flex">
//               <h6>CANOPY</h6>
//               <div class="circle"></div>
//               <p>Back End Dev</p>
//               <div class="circle"></div>
//               <p>2015</p>
//           </div>
//           <p>A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
//       </div>
//       <ul class="tags d-flex list-none">
//           <li>${projects[i].technologies[0]}</li>
//           <li>${projects[i].technologies[1]}</li>
//           <li>${projects[i].technologies[2]}</li>
//       </ul>
//       <div class="action">
//           <button class="btn project" type="button" id=${projects[i].id} data-tab=${projects[i].id}>See Project</button>
//       </div>
//   </div>
// </article>`;
//   i++;
// }
