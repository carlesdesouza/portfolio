'use strict';


// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
const sidebarText = document.getElementById("sidebar-text");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { 
  elementToggleFunc(sidebar);
  
  if (sidebarText.innerHTML === "Show Contacts") {
    sidebarText.innerHTML = "Hide Contacts";
  } else if (sidebarText.innerHTML === "Hide Contacts") {
    sidebarText.innerHTML = "Show Contacts";
  } else if (sidebarText.innerHTML === "Afficher les Contacts") {
    sidebarText.innerHTML = "Masquer les Contacts";
  } else {
    sidebarText.innerHTML = "Afficher les Contacts";
  }
});


// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.length;
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}
// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");
const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue < 5) {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category.length) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function() {

    let selectedValue = this.innerText.length;
    selectValue.innerText = this.length;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.length === pages[i].dataset.page.length) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    };
  });
};

const homeLink = document.getElementById("home-link");
const portfolioLink = document.getElementById("portfolio-link");
const portfolioLinkTab = document.getElementById("portfolio-link-tab");
const skillsLink = document.getElementById("skills-link");
const skillsLinkTab = document.getElementById("skills-link-tab");
const journeyLink = document.getElementById("journey-link");
const scrollTopBtn = document.getElementById("scrollTopBtn");

const navigationArray = [homeLink, portfolioLink, portfolioLinkTab, skillsLink, skillsLinkTab, journeyLink, scrollTopBtn];

for (let index = 0; index < navigationArray.length; index++) {
  navigationArray[index].addEventListener("click", function () {
    window.scrollTo({
      top: 0, 
      behavior: "smooth"});
  }); 
};

const certificationLink = document.getElementById("certification-link");
const certificationPage = document.getElementById("certification-page");
certificationLink.addEventListener("click", function () {
  setTimeout(() => {
    certificationPage.scrollIntoView();
  }, 100);
});

window.addEventListener("scroll", function () {

  window.scrollY >= 1700 ? scrollTopBtn.classList.add("active") : scrollTopBtn.classList.remove("active");

});

/* dark & light theme button toggle */
const themeToggleBtn = document.getElementById("switchTheme");

//CHANGE LES COULEURS DES 4 IMAGES DES SERVICES
function servicesImgColor() {
  const webdev = document.getElementById("darkmode_webdev");
  const mobdev = document.getElementById("darkmode_mobdev");
  const webdes = document.getElementById("darkmode_webdes");
  const mobdes = document.getElementById("darkmode_mobdes");

  webdev.classList.toggle("darkmode_icons");
  webdev.classList.toggle("lightmode_icons");

  mobdev.classList.toggle("darkmode_icons");
  mobdev.classList.toggle("lightmode_icons");

/*   webdes.classList.toggle("darkmode_icons");
  webdes.classList.toggle("lightmode_icons");

  mobdes.classList.toggle("darkmode_icons");
  mobdes.classList.toggle("lightmode_icons");  */ 
}

//CLICK SUR BUTTON THEME
themeToggleBtn.addEventListener("click", function () {

  servicesImgColor();

  document.body.classList.toggle("light_theme");
  document.body.classList.toggle("dark_theme");
  const languageName = document.getElementById("language-name");

  if (document.body.classList[0] == "light_theme" && languageName.innerHTML == "English") {
    themeToggleBtn.title = "Light Mode"; 
  } else if (document.body.classList[0] == "light_theme" && languageName.innerHTML == "Français"){
    themeToggleBtn.title = "Mode Clair";
  } else if (document.body.classList[0] == "dark_theme" && languageName.innerHTML == "Français"){
    themeToggleBtn.title = "Mode Sombre"; 
  } else {
    themeToggleBtn.title = "Dark Mode";
  }
});

// Modal toggle function
const myModal = new bootstrap.Modal(document.getElementById('modalId'), {}); 
myModal.show();
/* const modal = document.getElementById("modalId");
const modalClose = document.getElementById("modalClose");

modalClose.addEventListener("click", function() {
  modal.remove();
}); */