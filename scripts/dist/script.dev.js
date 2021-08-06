"use strict";

var leftArrow = document.querySelector(".left-arrow");
console.log(leftArrow);
var navBar = document.querySelector(".nav");
var navCloseButton = document.querySelector(".nav__close");
var navOpenButton = document.querySelector(".header__nav--open");
var projectCards = document.querySelectorAll(".projects__card");
var projectsContainer = document.querySelector(".projects__container");
var rightArrow = document.querySelector(".right-arrow");
var count = 1;

var getProjects = function getProjects() {
  return fetch("./project-data.json").then(function (response) {
    return response.json();
  });
};

var generateIconsHtml = function generateIconsHtml(iconsArray) {
  var icons = iconsArray.map(function (icon) {
    return "<i class=\"".concat(icon, "\"></i>");
  }).join("");
  console.log(icons);
  return icons;
};

var generateProjectHtml = function generateProjectHtml(project) {
  return "<div class=\"projects__card\" id=\"project".concat(project.id, "\">\n    <a href=").concat(project.link, " target=\"_blank\">\n      <img src=").concat(project.img, " alt=").concat(project.alt, " class=\"projects__screenshot\">\n    </a>\n    <h3 class=\"projects__h3\">").concat(project.title, "</h3>\n    <p class=\"projects__description\">").concat(project.description, "</p>\n    <div class=\"projects__icons\">\n      ").concat(generateIconsHtml(project.icons), "\n    </div>\n    <div class=\"projects__buttons\">\n      <a href=").concat(project.link, " class=\"button button--projects link\" target=\"_blank\">Launch<i class=\"fas fa-external-link-alt icon\"></i></a>\n      <a href=").concat(project.github, " class=\"button button--projects link\" target=\"_blank\">Code<i class=\"fab fa-github-square icon\"></i></a>\n    </div>\n  </div>\n    ");
};

var scrollProjects = function scrollProjects(direction) {
  var currentProject = document.querySelector("#project".concat(count));
  var newCount;

  if (direction === "left") {
    newCount = count > 1 ? count - 1 : 5;
  } else {
    newCount = count < 5 ? count + 1 : 1;
  }

  var nextProject = document.querySelector("#project".concat(newCount));
  currentProject.style.display = "none";
  nextProject.style.display = "block";
  count = newCount;
}; // navOpenButton.addEventListener("click", () => {
//   navOpenButton.style.display = "none";
//   navBar.style.display = "flex";
// });
// navCloseButton.addEventListener("click", () => {
//   navOpenButton.style.display = "block";
//   navBar.style.display = "none";
// })


leftArrow.addEventListener("click", function () {
  scrollProjects("left");
});
rightArrow.addEventListener("click", function () {
  scrollProjects("right");
});
getProjects().then(function (projects) {
  projectsContainer.innerHTML = projects.map(function (project) {
    return generateProjectHtml(project);
  }).join("");
});