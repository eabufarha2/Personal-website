const sections = document.querySelectorAll("section");
const menuItems = document.querySelectorAll(".menu li");

function onScroll() {
  let currentSectionId = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 60; 
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSectionId = section.getAttribute("id");
    }
  });

  menuItems.forEach((li) => {
    li.classList.remove("active");
    const href = li.querySelector("a").getAttribute("href").substring(1);
    if (href === currentSectionId) {
      li.classList.add("active");
    }
  });
}

window.addEventListener("scroll", onScroll);


const sectionsNavList = document.querySelectorAll("section");
const navListItems = document.querySelectorAll(".nav-list a");

function onScrollNavList() {
  let currentNavSectionId = "";

  sectionsNavList.forEach((section) => {
    const sectionTopNav = section.offsetTop - 60;
    const sectionHeightNav = section.offsetHeight;

    if (
      window.scrollY >= sectionTopNav &&
      window.scrollY < sectionTopNav + sectionHeightNav
    ) {
      currentNavSectionId = section.getAttribute("id");
    }
  });

  navListItems.forEach((a) => {
    a.classList.remove("active");
    const href = a.getAttribute("href").substring(1);
    if (href === currentNavSectionId) {
      a.classList.add("active");
    }
  });
}

window.addEventListener("scroll", onScrollNavList);




document.getElementById("menuIcon").addEventListener("click", function () {
  var navList = document.getElementById("navList");
  if(navList.style.display.length == 0){
    navList.style.display = "flex";
  }
  else{
  if (navList.style.display == "none") {
    navList.style.display = "flex";
  } else {
    if (navList.style.display == "flex") {
      navList.style.display = "none";
    }
  }
}});
