import './style.css';
import 'bootstrap';
import Profile from '../assets/images/profile-pic2.png';
import Project1 from '../assets/images/moviex.png';
import Project2 from '../assets/images/todo.png';
import Project3 from '../assets/images/bookstore.png';
import { displayProjects } from './modules/displayProjects';
import { displayMenu } from './modules/displayMenu';

const introPicture = document.querySelector('.intro-picture');
const myProfilePic = new Image();
myProfilePic.src = Profile;
introPicture.appendChild(myProfilePic);
const listOfProjects = document.querySelector('.projects-list');
const projects = [Project1, Project2, Project3];
displayProjects(listOfProjects, projects);

const navMenuOpen = document.querySelector('.nav-menu-open');
navMenuOpen.addEventListener('click', displayMenu);
const navMenuClose = document.querySelector('.nav-menu-close');
navMenuClose.addEventListener('click', displayMenu);

const navLinks = document.querySelectorAll('.nav-links');
navLinks.forEach((link) => {
  link.addEventListener('click', displayMenu);
});
