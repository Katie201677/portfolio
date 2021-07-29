import projects from "./project-data.js";

const projectsContainer = document.querySelector(".projects__container");
const projectsArrows = document.querySelector(".projects__arrows");

const generateIconsHtml = (iconsArray) => {
  const icons = iconsArray.map(icon =>`<i class="${icon}"></i>`).join("");
  console.log(icons);
  return icons;
}

const generateProjectHtml = (project) => {
  return (
    `<div class="projects__card projects__card--all" id=${project.id}>
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

projectsContainer.innerHTML = projects.map((project) => {
  return generateProjectHtml(project);
}).join("");

projectsArrows.addEventListener("click", () => {
  console.log("arrow clicked");
})