let isClicked = false;
const form = document.getElementById('form');
const error = document.getElementById('error');

function openNav() {
  if (!isClicked) {
    document.getElementById('Mynav').style.display = 'block';
    document.getElementById('head').style.filter = 'blur(0.9rem)';
    document.getElementById('logo').style.filter = 'blur(0.9rem)';
    document.getElementById('hamb').style.display = 'none';
    isClicked = true;
  } else {
    document.getElementById('Mynav').style.display = 'none';
    document.getElementById('head').style.filter = 'none';
    document.getElementById('hamb').style.display = 'block';
    document.getElementById('logo').style.filter = 'none';
    isClicked = false;
  }
}

// eslint-disable-next-line no-unused-vars
function menuClicked() {
  openNav();
}

const projects = [
  {
    id: 0,
    place: 'Microverse',
    title: 'Full Stack Project',
    year: '2022',
    name: 'Doctor Appointments',
    description:
      "With this web application you can book and reserve a doctor's appointment",
    technologies: ['html', 'css', 'react', 'redux', 'ruby on rails', 'jest', 'github', 'Boostrap'],
    image: {
      link: 'logo/screenshot1.png',
      alt: 'doctor app',
    },

    liveSource: 'https://doctora-app.netlify.app/',
    sourceCode: 'https://github.com/silviatofana/Doctor-appointment',
  },
  {
    id: 1,
    name: 'Book-react',
    place: 'Microverse',
    title: 'Frontend Dev Project',
    year: '2022',
    description:
      'This project will lay foundations for your Bookstore website. You will create the React part of the app. You will also set up routing using React',
    technologies: ['css', 'javascript', 'html', 'react'],
    image: {
      link: 'logos/screenshot2.png',
      alt: 'book-react',
    },
    liveSource: 'https://app-tests--voluble-alfajores-60db6f.netlify.app/',
    sourceCode: 'https://github.com/silviatofana/book-react-',
  },
  {
    id: 2,
    name: 'My Conference',
    place: 'Microverse',
    title: 'Frontend Dev Project',
    year: '2022',
    description:
      'This a professional website based on Behance design . It is a project that uses Javascript objects to dynamically render DOM elements',
    technologies: ['css', 'javascript', 'html'],
    image: {
      link: 'logos/conf.png',
      alt: 'My conference',
    },
    liveSource: 'https://silviatofana.github.io/Conference-Capstone/',
    sourceCode: 'https://github.com/silviatofana/Conference-Capstone',
  },
  {
    id: 3,
    name: 'Awesome Books',
    place: 'Micoverse',
    title: 'Frontend Dev Project',
    year: '2022',
    description:
      'A SPW (Single Page Website) that can track your favorite books on your browser! Made with ES6 modules,JavaScript, HTML 5 and CSS 3',
    technologies: ['es6', 'css', 'java script', 'html'],
    image: {
      link: 'logos/awesome-books-desktop-version.png',
      alt: 'Book a Dev',
    },
    liveSource: 'https://silviatofana.github.io/awesome-books-es6-modules/',
    sourceCode: 'https://github.com/silviatofana/awesome-books-es6-modules',
  },
];

const modalDetails = document.createElement('div');
modalDetails.id = 'modal-details';
modalDetails.className = 'project-details';

function showDetails(projectIndex) {
  const projectsCode = `
  <div class="details-container">
    <div class="details-container-content">
    <div class="headc">
    <h1 class= "headtitle">${projects[projectIndex].name}</h1>
    <div class="works__card__subtitle flex">
              <p class="works__card__subtitle-1 c1">
              <b>${projects[projectIndex].place}</b>
              </p>
              <ul class="works__card__subtitle-ul flex">
                <li class="works__card__subtitle-li c2">
                ${projects[projectIndex].title}
                </li>
                <li class="works__card__subtitle-li c2"> 
                ${projects[projectIndex].year}
                </li>
              </ul>
            </div>
    <div class="closeDetails" id="closeDetails">&times;</div>
    </div>
      <img class="project-image" src="${projects[projectIndex].image.link}" alt="${projects[projectIndex].image.alt}" />
       <div class="s1"> 
      <p class="description">
        ${projects[projectIndex].description}
       </p>

        <div class="tech-and-buttons">
          <div class="card-languages">
            ${(function usedTech() {
    return projects[projectIndex].technologies
      .map((tech) => `<li class="language">${tech}</li>`)
      .join('');
  }())}
          </div>
          <div class="buttons">
            <a href="${
  projects[projectIndex].liveSource
}" class="btn green-button">
<div class ="it">See Live</div>
<div class="image"><img src="logos/Icon.png"></div>
 </a>

             <a href="${
  projects[projectIndex].sourceCode
}" class="btn green-button"><div class ="it">See source</div>
<div class="image"><img src="logos/Vector.png"></div>
 </a>
          </div>
          </div>
    </div>
  </div>`;

  modalDetails.innerHTML += projectsCode;
  document.body.appendChild(modalDetails);
  document.getElementById('closeDetails').addEventListener('click', () => {
    modalDetails.innerHTML = '';
    document.body.removeChild(modalDetails);
    document.getElementById('hero').style.filter = 'none';
  });
}

const portfolioDynamic = document.getElementById('portfolio-section');
const projectList = document.createElement('ul');
projectList.className = 'works__cards ul grid';
portfolioDynamic.appendChild(projectList);

let projectsCard = '';
for (let j = 0; j < projects.length; j += 1) {
  projectsCard += `
  <li class="works__card flex bg-white">
            <div class="works__card__img">
              <img src="${projects[j].image.link}" alt="tonic project" />
            </div>
            <div class="works__card__text">
              <h2 class="works__card__title">${projects[j].name}</h2>
              <div class="works__card__subtitle flex">
                <p class="works__card__subtitle-1">${projects[j].place}</p>
                <ul class="works__card__subtitle-ul flex">
                  <li class="works__card__subtitle-li">${projects[j].title}</li>
                  <li class="works__card__subtitle-li">${projects[j].year}</li>
                </ul>
              </div>
              <p class="works__card__dsc p1">
              ${projects[j].description}
              </p>
              <div class="works__card__topics flex">
                <p class="works__card__topics__text p2 w1">html</p>
                <p class="works__card__topics__text p2 w1">css</p>
                <p class="works__card__topics__text p2 w1">javascript</p>
              </div>
              <div class="works__card__btn">
                <button type="button" class="btn b1 details-btn " type="button" data-id="${
  projects[j].id
}">See Project</button>
              </div>
            </div>
          </li>`;
}
projectList.innerHTML = projectsCard;

const showButton = document.querySelectorAll('.details-btn');
showButton.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    showDetails(event.target.dataset.id);
    document.getElementById('hero').style.filter = 'blur(1.9rem)';
  });
});

form.addEventListener('submit', (event) => {
  let check = false;
  const emailInput = document.getElementById('user_email');
  if (emailInput.value.toLowerCase() === emailInput.value) {
    check = true;
  }
  if (check === false) {
    event.preventDefault();
    error.innerText = 'Please Your Email Must be in Lower Case';
    error.style.color = 'red';
  }
});