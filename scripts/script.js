const leftArrow = document.querySelector(".left-arrow");
console.log(leftArrow);
const navBar = document.querySelector(".nav");
const navCloseButton = document.querySelector(".nav__close");
const navOpenButton = document.querySelector(".header__nav--open");
const projectCards = document.querySelectorAll(".projects__card");
const projectsContainer = document.querySelector(".projects__container");
const rightArrow = document.querySelector(".right-arrow");

let count = 1;

const getProjects = () => {
  return (
  fetch("./project-data.json")
    .then(response => response.json())
  )
}


const generateIconsHtml = (iconsArray) => {
  const icons = iconsArray.map(icon =>`<i class="${icon}"></i>`).join("");
  console.log(icons);
  return icons;
}

const generateProjectHtml = (project) => {
  return (
    `<div class="projects__card" id="project${project.id}">
    <a href=${project.link} target="_blank">
      <img src=${project.img} alt=${project.alt} class="projects__screenshot">
    </a>
    <h3 class="projects__h3">${project.title}</h3>
    <p class="projects__description">${project.description}</p>
    <div class="projects__icons">
      ${generateIconsHtml(project.icons)}
    </div>
    <div class="projects__buttons">
      <a href=${project.link} class="button button--projects link" target="_blank">Launch<i class="fas fa-external-link-alt icon"></i></a>
      <a href=${project.github} class="button button--projects link" target="_blank">Code<i class="fab fa-github-square icon"></i></a>
    </div>
  </div>
    `
  )
}

const scrollProjects = (direction) => {
  const currentProject = document.querySelector(`#project${count}`);
  let newCount;
  if (direction === "left") {
    newCount = count > 1 ? count - 1 : 6;
  } else {
    newCount = count < 6 ? count + 1 : 1;
  }
  const nextProject = document.querySelector(`#project${newCount}`);
  currentProject.style.display = "none";
  nextProject.style.display = "block";
  count = newCount;
}

leftArrow.addEventListener("click", () => {
  scrollProjects("left");
});

rightArrow.addEventListener("click", () => {
  scrollProjects("right");
});

getProjects().then((projects) => {
  projectsContainer.innerHTML = projects.map((project) => {
    return generateProjectHtml(project);
  }).join("");
})