const works = [
  {
    name: 'Hum Style Awards 2022',
    image: './images/humStyle1.jpg',

    tags: ['Hum tv', 'Front End Dev', '2022'],
    live: 'https://zuhaib042.github.io/capstone-html-css/',
    repository: 'https://github.com/Zuhaib042/capstone-html-css.git',
    technology: ['html', 'css', 'javascript'],
    description:
      'It is my first Microverse Capstone project. it is a two page website where i have applied my html, css and javascript skills.',
  },

  {
    name: 'Awesome Books',
    image: './images/awesomeBooks2.png',
    tags: ['Books Data', 'Front End Dev', '2022'],
    live: 'https://zuhaib042.github.io/Awesome-books/',
    repository: 'https://github.com/Zuhaib042/Awesome-books.git',
    technology: ['html', 'css', 'javascript'],
    description:
      'It is first week project of microverse Javascript module. it is a simple website where user can add and remove books. the webpage will store data in local storage and will display the data from it.',
  },
  {
    name: 'To-Do List',
    image: './images/todolist.png',
    tags: ['To-Do', 'Front End Dev', '2022'],
    live: 'https://zuhaib042.github.io/toDoList-minimalist/dist/',
    repository: 'https://github.com/Zuhaib042/toDoList-minimalist.git',
    technology: ['html', 'css', 'javascript', 'webpack'],
    description:
      'It is a simple yet powerful to do list app in which you can add daily to-do tasks. it would save all the data and changes in local storage and track your daily tasks whether you have completed them or not.',
  },
  {
    name: 'multi-post stories',
    image: './images/portfolio-img3.jpg',
    tags: ['CANOPY', 'Back End Dev', '2015'],
    live: '#',
    repository: '#',
    technology: ['html', 'css', 'javascript', 'ruby'],
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae delectus eveniet libero suscipit!',
  },
];

const sectionPortfolio = document.querySelector('.works');

function projectsAll() {
  works.forEach((work) => {
    let techs = work.technology;
    const items = techs.forEach((item) => console.log(item));
    // console.log(items);
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
       ${work.technology
         .map((item) => `<li class="tags-li">${item}</li>`)
         .join('')}  
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
  
  <img class="sample mod" src='${
    work.image
  }' alt="multi-purpose stories project snapshoot">
  
  <header class="project-header">
  <p class="project-header-p">${work.description}</p>

  <div class="header-desc">
  <ul class="set-stack">
  ${work.technology.map((tech) => `<li class="stack">${tech}</li>`).join('')}
  </ul>
  <div class="rule"></div>
  <div class="btnflex">
  <a href="${
    work.live
  }" class="btn mod" type="submit">see live<img class="btn-icon" src="./images/Icon.png" alt="check live version"></a>
  <a href="${
    work.repository
  }" class="btn mod" type="submit">see source<img class="btn-icon" src="./images/github.png" alt="check live version"></a
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
            'active'
          );
        });
      });
    });
  }
}

projectsAll();
eachModal();
