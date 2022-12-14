'use strict';

// navbar background transition
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll' , () => {
  if(window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
})



// navbar - click
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click' , (event) => {

  const target = event.target;
  const link = target.dataset.link;

  if(link == null) {
    return;
  }
  navbarMenu.classList.remove('open');
  scrollIntoView(link);
})

// navbar toggle
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click' , () => {
  navbarMenu.classList.toggle('open');
})

// click - contact me
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click' , () => {
  scrollIntoView('#contact');
})



// scroll - home - transparent
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll' , () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
})

// Arrow btn
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll' , () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
})

// Arrow btn - up
arrowUp.addEventListener('click' , () => {
  scrollIntoView('#home');
})




// Projects
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click' , (event) => {
  const filter = event.target.dataset.filter || event.target.parentNode.dataset.filter;
  if (filter === null) {
    return;
  }

  // works btn selected
const selected = document.querySelector('.category__btn.selected');
selected.classList.remove('selected');
const target = event.target.nodeName === 'BUTTON' ? event.target : event.target.parentNode;
target.classList.add('selected');


  projectContainer.classList.add('anim-out');
  

  setTimeout(()=>{
    projects.forEach((projects) => {
      if(filter === '*' || filter === projects.dataset.type) {
        projects.classList.remove('invisible');
      } else {
        projects.classList.add('invisible');
      }
    });
    projectContainer.classList.remove('anim-out');
  },300)
  
  console.log(filter);
});

const scrollIntoView = (selector) => {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior: 'smooth'});
}


// All section scroll
const sectionList = document.querySelectorAll('.section');
const skills = document.querySelectorAll('.skill__value');
const skillSection = document.querySelector('#skills');

const scrollAction = () => {
  for(const section of sectionList) {
    if (section.classList !== 'show') {
      if (window.innerHeight > section.getBoundingClientRect().top) {
        section.classList.add('show');
      }
    }
  }

  for(const skill of skills) {
    if (skill.classList !== 'bar') {
      if (window.innerHeight > skillSection.getBoundingClientRect().top) {
        skill.classList.add('bar');
      }
    }
  }
  
}

window.addEventListener('scroll' , scrollAction);
