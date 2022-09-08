const works = [
  {
    name: 'Tonic',
    image: './images/portfolio-img4.jpg',
    tags: ['CANOPY', 'Back End Dev', '2015'],
    live: '#',
    repository: '#',
    technology: ['html', 'css', 'javascript'],
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, odio adipisci! Pariatur nulla cumque tempore.',
  },

  {
    name: 'Multi-post Stories',
    image: './images/portfolio-img1.jpg',
    tags: ['CANOPY', 'Back End Dev', '2015'],
    see: '#',
    repository: '#',
    technology: ['html', 'css', 'javascript'],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, accusantium! Unde porro debitis neque?',
  },
  {
    name: 'Tonic',
    image: './images/portfolio-img2.jpg',
    tags: ['CANOPY', 'Back End Dev', '2015'],
    live: 'https://nedramrez.github.io/portfolio',
    repository: '#',
    technology: ['html', 'css', 'javascript'],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat distinctio hic ea similique.',
  },
  {
    name: 'multi-post stories',
    image: './images/portfolio-img3.jpg',
    tags: ['CANOPY', 'Back End Dev', '2015'],
    live: '#',
    repository: '#',
    technology: ['html', 'css', 'javascript'],
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae delectus eveniet libero suscipit!',
  },
];

const sectionPortfolio = document.querySelector('.works');

function projectsAll() {
  works.forEach((work) => {
    const portfolioCard = document.createElement('div');
    portfolioCard.classList.add('skills');
    portfolioCard.innerHTML = `<article class="d-flex flex-column card">
 <div class="card-image">
     <img src=${work.image} alt="tonic image">
 </div>
 <div class="card-content">
     <div class="primary-text">
         <h2>${work.name}</h2>
         <div class="frame d-flex">
             <h6>${work.tags[0]}</h6>
             <div class="circle"></div>
             <p>${work.tags[1]}</p>
             <div class="circle"></div>
             <p>${work.tags[2]}</p>
         </div>
         <p>${work.description}</p>
     </div>
     <ul class="bags d-flex list-none">
         <li class="tags-li">${work.technology[0]}</li>
         <li class="tags-li">${work.technology[1]}</li>
         <li class="tags-li">${work.technology[2]}</li>
     </ul>
     <div class="action">
         <button type="button" class="btn project button_project-1" data-tab="1">See Project</button>
     </div>
 </div>
</article>`;
    sectionPortfolio.appendChild(portfolioCard);
  });
}

function modalWindow() {
  const allWorks = [];

  works.forEach((work) => {
    const popupWindow = document.createElement('div');
    popupWindow.classList.add('modal-wrapper');
    popupWindow.innerHTML = `<div class="skills mod-container">
  <div class="modal-header">
  <p class="modal-close"><i class="fa-solid fa-xmark"></i></p>
  <h2>${work.name}</h2>
  <ul class="tags">
  <li class="diff-li">${work.tags[0]}</li>
  <li>${work.tags[1]}</li>
  <li>${work.tags[2]}</li>
  </ul>
  </div>
  
  <img class="sample mod" src='${work.image}' alt="multi-purpose stories project snapshoot">
  
  <header class="project-header">
  <p class="project-header-p">${work.description}</p>

  <div class="header-desc">
  <ul class="set-stack">
  <li class="stack">${work.technology[0]}</li>
  <li class="stack">${work.technology[1]}</li>
  <li class="stack">${work.technology[2]}</li>
  </ul>
  <div class="rule"></div>
  <div class="btnflex">
  <button class="btn mod" type="submit">see live<img class="btn-icon" src="./images/Icon.png" alt="check live version"></button>
  <button class="btn mod" type="submit">see source<img class="btn-icon" src="./images/github.png" alt="check live version"></button
  </div>
  </div>
  
  </header>
  </div>`;
    allWorks.push(popupWindow);
  });
  return allWorks;
}

function eachModal() {
  const seeProjectBtn = document.querySelectorAll('.project');
  const allProjectModal = modalWindow();

  for (let i = 0; i < seeProjectBtn.length; i += 1) {
    seeProjectBtn[i].addEventListener('click', () => {
      allProjectModal[i].classList.add('active');
      sectionPortfolio.appendChild(allProjectModal[i]);

      const close = document.querySelectorAll('.modal-close');
      close.forEach((btn) => {
        btn.addEventListener('click', () => {
          btn.parentElement.parentElement.parentElement.classList.remove(
            'active',
          );
        });
      });
    });
  }
}

projectsAll();
eachModal();
