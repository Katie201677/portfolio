"use strict";

var _projectData = _interopRequireDefault(require("/Users/katiewalker/Documents/nology/portfolio/portfolio/project-data.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var projectsContainer = document.querySelector(".projects__container");

var generateIconsHtml = function generateIconsHtml(iconsArray) {
  iconsArray.forEach("".concat(icon)).join("");
};

var generateProjectHtml = function generateProjectHtml(project) {
  return "<div class=\"projects__card projects__card--all\" id=".concat(project.id, ">\n    <a href=").concat(project.link, " target=\"_blank\">\n      <img src=").concat(project.img, " alt=").concat(project.alt, " class=\"projects__screenshot\">\n    </a>\n    <h3 class=\"projects__h3\">").concat(project.title, "</h3>\n    <p class=\"projects__description\">").concat(_projectData["default"].description, "</p>\n    <div class=\"projects__icons\">\n      ").concat(generateIconsHtml(project.icons), "\n    </div>\n    <div class=\"projects__buttons\">\n      <a href=").concat(project.link, "} class=\"button button--projects link\" target=\"_blank\">Launch<i class=\"fas fa-external-link-alt icon\"></i></a>\n      <a href=").concat(project.github, " class=\"button button--projects link\" target=\"_blank\">Code<i class=\"fab fa-github-square icon\"></i></a>\n    </div>\n  </div>\n    ");
};

projectsContainer.innerHTML = generateProjectHtml(_projectData["default"][0]);