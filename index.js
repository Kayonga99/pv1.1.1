const menuButton = document.querySelector('.mobile_menu_btn');
const mobileMenu = document.querySelector('.mobile_menu');
const remButton = document.querySelector('.fa-times');

// transition styles
mobileMenu.style.right = '-800px';
mobileMenu.style.transition = 'right 800ms';

// listen for a click on the menu button and X button
menuButton.addEventListener('click', () => {
  mobileMenu.style.display = 'block';
  setTimeout(() => {
    mobileMenu.style.right = '0px';
  }, 1);
});

remButton.addEventListener('click', () => {
  mobileMenu.style.right = '-800px';
  setTimeout(() => {
    mobileMenu.style.display = 'none';
  }, 900);
  menuButton.style.display = 'block';
});

document.querySelectorAll('.menu_link').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.style.right = '-800px';
    setTimeout(() => {
      mobileMenu.style.display = 'none';
    }, 900);
    menuButton.style.display = 'block';
  });
});

// Project popup
// Create project object
const projectPop = [
  {
    name: 'NAC Pentecost',
    desc: "This project was built with a Mobile-first design perspective and it's mobile responsive. for the design, the main technologies in CSS are flexbox and media query. The Festival was inspired by the Boulevard urban music festival in Morocco.",
    featuredImage: 'img/projects/marock/preview0.gif',
    miniImg: ['img/projects/marock/preview0.png', 'img/projects/marock/preview1.png', 'img/projects/marock/preview2.png', 'img/projects/marock/preview3.png'],
    technologies: ['HTML/CSS', 'Flexbox', 'JavaScript'],
    linkToLiveVersion: 'https://ismailco.github.io/First-capstone-project_Conference-page/',
    linkToSource: 'https://github.com/Ismailco/First-capstone-project_Conference-page',
  },
  {
    name: 'Math magicians',
    desc: 'This is my first react.js App, that I build while learning React. The App has the functionality of Calculator and some mathematic quotes.',
    featuredImage: 'img/projects/mathMagicians/preview0.png',
    miniImg: ['img/projects/mathMagicians/preview0.png', 'img/projects/mathMagicians/screenshot1.png', 'img/projects/mathMagicians/screenshot.png'],
    technologies: ['HTML/CSS', 'React', 'Javascript'],
    linkToLiveVersion: 'https://fancy-zuccutto-0837b6.netlify.app/',
    linkToSource: 'https://github.com/Kayonga99/Math-Magician',
  },
  {
    name: 'Space travel Hub',
    desc: 'This is a simbe react website for company that provides commercial and scientific space travel sercises. This application will allow users to book rockets and join selected space missions.',
    featuredImage: 'img/projects/spaceTravel/screenshot0.png',
    miniImg: ['img/projects/spaceTravel/screenshot.png', 'img/projects/spaceTravel/screenshot1.png', 'img/projects/spaceTravel/screenshot2.png', 'img/projects/spaceTravel/screenshot3.png'],
    technologies: ['HTML/CSS', 'JavaScript', 'redux', 'React'],
    linkToLiveVersion: 'https://space-travelers-mehdirh-kayonga99.netlify.app/',
    linkToSource: 'https://github.com/Kayonga99/Space--Travellers',
  },

  {
    name: 'Book Store',
    desc: "This project was built in colaborations with jhonathan. We had to select an API (OMDb API) that provides data about Movies and then build the webapp around it. The webapp has 2 user interfaces, it's mobile responsive",
    featuredImage: 'img/projects/bookStore/preview0.gif',
    miniImg: ['img/projects/bookStore/preview0.png', 'img/projects/bookStore/screenshot1.png', 'img/projects/bookStore/screenshot2.png', 'img/projects/bookStore/screenshot-m-1.png', 'img/projects/bookStore/screenshot-m-2.png'],
    technologies: ['HTML/CSS', 'JavaScript', 'API', 'Flexbox'],
    linkToLiveVersion: 'https://movieguru.ml/',
    linkToSource: 'https://github.com/Ismailco/Movies-Guru',
  },
  {
    name: 'Awesome-books',
    desc: "This project was built with a Mobile-first design perspective and it's mobile responsive. In this project, we build a basic website that allows users to add/remove books from a list, using JavaScript objects and arrays. and dynamically modify the DOM and add basic events.",
    featuredImage: 'img/projects/bookList/preview0.png',
    miniImg: ['img/projects/bookList/preview0.png', 'img/projects/bookList/preview1.png', 'img/projects/bookList/preview2.png', 'img/projects/bookList/preview3.png'],
    technologies: ['HTML/CSS', 'Javascript', 'Bootstrap'],
    linkToLiveVersion: 'https://peppy-salmiakki-893648.netlify.app/',
    linkToSource: 'https://github.com/Kayonga99/Awesome-Books',
  },
  {
    name: 'To Do List with Webpack',
    desc: 'In this project, I build a basic website that allows users to add/remove taskes from a list, using JavaScript objects and arrays. and dynamically modify the DOM and add basic events. The project built using Webpack.',
    featuredImage: 'img/projects/todoWebpack/preview0.png',
    miniImg: ['img/projects/todoWebpack/preview0.png', 'img/projects/todoWebpack/screenshot1.png', 'img/projects/todoWebpack/screenshot.png'],
    technologies: ['HTML/CSS', 'JavaScript', 'Flexbox', 'WebPack'],
    linkToLiveVersion: 'https://chimerical-brigadeiros-f435c0.netlify.app/',
    linkToSource: 'https://github.com/Kayonga99/ToDo-List',
  },
  {
    name: 'Food App',
    desc: 'This is a food and recipe app built using RoR, you can add food and create recipes with the food from the database. This user can log in to the app and store the recipes as private or share them publicly with all the users of the app. it also has a shopping list so the user can track foods that are not available anymore',
    featuredImage: 'img/projects/jsCapstone/foodApp.png',
    miniImg: ['img/projects/jsCapstone/screenshot1.png', 'img/projects/jsCapstone/screenshot2.png', 'img/projects/jsCapstone/screenshot3.png', 'img/projects/jsCapstone/screenshot4.png', 'img/projects/jsCapstone/screenshot5.png'],
    technologies: ['Ruby', 'Ruby on Rails', 'Postgresql', 'Auth'],
    linkToLiveVersion: 'https://mv-food-recipe-app.herokuapp.com/',
    linkToSource: 'https://github.com/Ismailco/ROR-GROUP-PROJECT',
  },
  {
    name: 'Leaderboard',
    desc: 'In this project, I set up a basic JavaScript project for the Leaderboard list app, using webpack and ES6 features, notably modules. The project uses the Leaderboard API.',
    featuredImage: 'img/projects/leaderboard/preview0.png',
    miniImg: ['img/projects/leaderboard/screenshot1.png', 'img/projects/leaderboard/screenshot2.png', 'img/projects/leaderboard/screenshot3.png'],
    technologies: ['HTML/CSS', 'JavaScript', 'API', 'Flexbox'],
    linkToLiveVersion: 'https://shiny-travesseiro-4d513a.netlify.app/',
    linkToSource: 'https://github.com/Kayonga99/Leaderboard',
  },
   {
    name: 'Comming soon',
    desc: 'This project is still under development and review it will be displayed here as soon as it is ready!',
    featuredImage: 'img/projects/doctorApp/screenshot0.webp',
    miniImg: ['img/projects/doctorApp/screenshot1.png', 'img/projects/doctorApp/screenshot2.png', 'img/projects/doctorApp/screenshot3.png', 'img/projects/doctorApp/screenshot4.png', 'img/projects/doctorApp/screenshot5.png', 'img/projects/doctorApp/screenshot6.png', 'img/projects/doctorApp/screenshot7.png', 'img/projects/doctorApp/screenshot8.png', 'img/projects/doctorApp/screenshot9.png', 'img/projects/doctorApp/screenshot10.png', 'img/projects/doctorApp/screenshot11.png', 'img/projects/doctorApp/screenshot12.png', 'img/projects/doctorApp/screenshot13.png'],
    technologies: ['soon', 'soon', 'soon'],
    linkToLiveVersion: '',
    linkToSource: '',
  },
  {
    name: 'Comming soon',
    desc: 'This project is still under development and review it will be displayed here as soon as it is ready!',
    featuredImage: 'img/projects/budgetSaver/logo.gif',
    miniImg: ['img/projects/budgetSaver/screenshot0.png', 'img/projects/budgetSaver/screenshot1.png', 'img/projects/budgetSaver/screenshot2.png', 'img/projects/budgetSaver/screenshot3.png', 'img/projects/budgetSaver/screenshot4.png', 'img/projects/budgetSaver/screenshot5.png'],
    technologies: ['soon', 'soon', 'soon', 'soon'],
    linkToLiveVersion: '',
    linkToSource: '',
  },
  {
    name: 'Comming soon',
    desc: 'This project is still under development and review it will be displayed here as soon as it is ready!',
    featuredImage: 'img/projects/todo/preview0.webp',
    miniImg: ['img/projects/todo/preview0.png', 'img/projects/todo/preview1.png', 'img/projects/todo/preview2.png', 'img/projects/todo/preview3.png'],
    technologies: ['soon', 'soon', 'soon'],
    linkToLiveVersion: '',
    linkToSource: '',
  },
  {
    name: 'COVID-19-data-tracking',
    desc: 'COVID-19-data-tracking is a project built using React and redux in this project information on the COVID-19 virus is being fetched from an API. This Application shows data on COVID-19 in European countries, the information is on COVID-19 cases, deaths, people tested etc.',
    featuredImage: 'img/projects/covidApp/screenshot0.gif',
    miniImg: ['img/projects/covidApp/screenshot.png', 'img/projects/covidApp/screenshot1.png', 'img/projects/covidApp/screenshot2.png', 'img/projects/covidApp/screenshot3.png'],
    technologies: ['HTML/CSS', 'React', 'JavaScript', 'Flexbox'],
    linkToLiveVersion: 'https://relaxed-kheer-37635b.netlify.app/',
    linkToSource: 'https://github.com/Kayonga99/COVID-19-data-tracking',
  },
];

// Create the project section
const projectSection = document.querySelector('.projects_container');

document.addEventListener('DOMContentLoaded', () => {
  for (let i = 0; i < projectPop.length; i += 1) {
    const project = document.createElement('article');
    const projectImg = document.createElement('img');
    const projectBody = document.createElement('div');
    const projectHeading = document.createElement('h3');
    const projectList = document.createElement('ul');
    const projectBtn = document.createElement('button');
    projectBtn.classList.add('project_btn');
    projectBtn.textContent = 'See this Project';
    projectBtn.setAttribute('onclick', `window.location.href='${projectPop[i].linkToLiveVersion}'`);
    const projectSrc = document.createElement('button');
    projectSrc.classList.add('project_btn');
    projectSrc.textContent = 'See Source Code';
    projectSrc.setAttribute('onclick', `window.location.href='${projectPop[i].linkToSource}'`);
    const projectDesc = document.createElement('p');
    projectDesc.classList.add('project_desc');
    projectDesc.textContent = projectPop[i].desc;
    project.classList.add('project');
    projectImg.classList.add('project_img');
    projectImg.setAttribute('src', projectPop[i].featuredImage);
    projectImg.setAttribute('alt', 'project_image_preview');
    projectBody.classList.add('project_body');
    projectHeading.classList.add('project_name');
    projectHeading.textContent = projectPop[i].name;
    projectList.classList.add('project_languages');
    const projectBtns = document.createElement('div');
    const projectDetails = document.createElement('div');

    // Add tech tags
    projectPop[i].technologies.forEach((tech) => {
      const projectListItem = document.createElement('li');
      projectListItem.classList.add('project_language');
      projectListItem.textContent = tech;
      projectList.append(projectListItem);
    });

    projectDetails.append(projectHeading, projectList, projectDesc);
    projectBtns.append(projectBtn, projectSrc);
    projectBody.append(projectDetails, projectBtns);
    project.append(projectImg, projectBody);
    projectSection.append(project);
  }
});

// form validation
const form = document.querySelector('.form');
const formEmail = document.querySelector('.input2');

// function to check if the str is lowerCase
function isLowerCase(s) {
  return s === s.toLowerCase();
}

formEmail.addEventListener('input', () => {
  if (isLowerCase(formEmail.value)) {
    formEmail.setCustomValidity('');
  } else {
    formEmail.setCustomValidity('Please use lower case on your email!');
    formEmail.reportValidity();
    form.preventDefault();
  }
});

// local storage for form
form.addEventListener('input', () => {
  const formInfo = {
    name: document.querySelector('.input1').value,
    email: document.querySelector('.input2').value,
    message: document.querySelector('.input3').value,
  };

  localStorage.setItem('contactForm', JSON.stringify(formInfo));
});

const formObj = JSON.parse(localStorage.getItem('contactForm'));
document.querySelector('.input1').value = formObj.name;
document.querySelector('.input2').value = formObj.email;
document.querySelector('.input3').value = formObj.message;
