'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});



/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {

  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);

});



/**
 * skills toggle
 */


const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {

    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
    elemToggleFunc(skillsBox);

  });
}


const toggleButtons = document.querySelectorAll("[data-toggle-btn]");
const paragraphs = document.querySelectorAll(".toggle-paragraphs > div");

// Lists for skills, tools, and languages
const skillsList = document.querySelector(".skills-list");
const toolsList = document.querySelector(".tools-list");
const languagesList = document.querySelector(".languages-list");

// Initialize: Show only skills by default
skillsList.style.display = "flex";
toolsList.style.display = "none";
languagesList.style.display = "none";

paragraphs.forEach((p, index) => {
  p.classList.toggle("active", index === 0); // Show first paragraph
});

toggleButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    paragraphs.forEach(p => p.classList.remove("active"));
    toggleButtons.forEach(btn => btn.classList.remove("active"));

    // Activate the clicked button and paragraph
    button.classList.add("active");
    paragraphs[index].classList.add("active");

    // Show the corresponding list
    if (index === 0) {
      showList(skillsList);
      hideList(toolsList);
      hideList(languagesList);
    } else if (index === 1) {
      showList(toolsList);
      hideList(skillsList);
      hideList(languagesList);
    } else if (index === 2) {
      showList(languagesList);
      hideList(skillsList);
      hideList(toolsList);
    }
  });
});

// Helper functions to show/hide lists
function showList(list) {
  list.style.display = "flex";
}

function hideList(list) {
  list.style.display = "none";
}






/**
 * dark & light theme toggle
 */

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {

  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");

    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");

    localStorage.setItem("theme", "dark_theme");
  }

});

/**
 * check & apply last time selected theme from localStorage
 */

if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}