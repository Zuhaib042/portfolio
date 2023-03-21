const works = [
  {
    name: 'Cherry Rooms',
    image: './images/cherry-rooms.jpg',

    tags: ['Cherry Rooms', 'Full Stack Dev', '2023'],
    live: 'https://cherryrooms.netlify.app/',
    repository: 'https://github.com/adel-gu/Cherry-Rooms-front-end',
    technology: ['React', 'Rails', 'Postgresql', 'Tailwind CSS'],
    description: `Cherry Rooms is a front-end React project designed for the purpose of booking rooms in hotels, motels, or any other accommodation service. This project provides an intuitive and user-friendly interface that allows users to easily browse and reserve rooms based on their preferences and availability. The project is built using React, HTML, CSS, and JavaScript, with the use of APIs to fetch data from the backend.`,
  },
  {
    name: 'Countries Catalog',
    image: './images/countries.jpg',

    tags: ['Countries Catalog', 'Front End Dev', '2022'],
    live: 'https://thriving-crisp-6883e8.netlify.app/',
    repository: 'https://github.com/Zuhaib042/Countries-Catalog',
    technology: ['React', 'Redux', 'JavaScript', 'Tailwind CSS'],
    description: `Countries Catalog is a Single Page App built with react. It fetches data from 'https://restcountries.com/api' and shows all the countries of the world. It also shows their population on the homepage by clicking on any country's card, and takes you to a detailed page with more information about the specific country. In this web app I used Redux as a state management library, and for testing, I used react-testing-library with Jest.`,
  },
  {
    name: 'Tv-Zone',
    image: './images/tv-zome.jpg',

    tags: ['Tv-Zone', 'Front End Dev', '2022'],
    live: 'https://laiifuu.github.io/TV-Zone/dist/',
    repository: 'https://github.com/laiifuu/TV-Zone',
    technology: ['HTML', 'CSS', 'JavaScript', 'Webpack'],
    description:
      'Tv Zone is a website that displays information about TV shows. It also allows you to like the shows, comment on the shows, and make reservations. The data about the shows is being fetched from the TVMaze API. The likes, comments and reservations are being preserved in the external Involvement API.',
  },
  {
    name: 'Hum Style Awards 2022',
    image: './images/humStyle1.jpg',

    tags: ['Hum tv', 'Front End Dev', '2022'],
    live: 'https://zuhaib042.github.io/capstone-html-css/',
    repository: 'https://github.com/Zuhaib042/capstone-html-css.git',
    technology: ['HTML', 'CSS', 'JavaScript'],
    description:
      'This is my first Microverse Capstone project, it is a two page website where I have applied my HTML, CSS and Javascript skills.',
  },
  {
    name: '&quot;Space Travelers&quot; Hub',
    image: './images/space.jpg',
    tags: ['Space X', 'Front End Dev', '2022'],
    live: 'https://symphonious-marshmallow-1c5d68.netlify.app/',
    repository: 'https://github.com/Zuhaib042/Space-Travelers-Hub',
    technology: ['React', 'Redux', 'JavaScript', 'SpaceX api'],
    description: `&apos;Space Travelers&apos; Hub is an SPA app to view and read about the SpaceX latest rockets and missions form SpaceX API. You can reserve rockets and join their missions. We built this app with React and we used Redux as a state management library. For testing we used react-testing-library with Jest.`,
  },

  {
    name: 'Awesome Books',
    image: './images/awesomeBooks2.png',
    tags: ['Books Data', 'Front End Dev', '2022'],
    live: 'https://zuhaib042.github.io/Awesome-books/',
    repository: 'https://github.com/Zuhaib042/Awesome-books.git',
    technology: ['HTML', 'CSS', 'JavaScript', 'Webpack'],
    description:
      'This is a project from the first week of Microverse&apos;s Javascript module. It is a simple website where user can add and remove books. The webpage will store data in local storage and will display the data from it.',
  },
  {
    name: 'To-Do List',
    image: './images/todolist.png',
    tags: ['To-Do', 'Front End Dev', '2022'],
    live: 'https://zuhaib042.github.io/toDoList-minimalist/dist/',
    repository: 'https://github.com/Zuhaib042/toDoList-minimalist.git',
    technology: ['HTML', 'CSS', 'JavaScript', 'Webpack'],
    description:
      'This is a simple yet powerful to do list app in which you can add daily to-do tasks. This will save all the data and changes in local storage and track your daily tasks whether you have completed them or not.',
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
  <a target="_blank" href="${
    work.live
  }" class="btn mod" type="submit">see live<img class="btn-icon" src="./images/Icon.png" alt="check live version"></a>
  <a target="_blank" href="${
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
            'active',
          );
        });
      });
    });
  }
}

projectsAll();
eachModal();
