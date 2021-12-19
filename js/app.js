/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

const SECTION_PREFIX = "SECTION";
const ACTIVE_CLASS = "active";

/**
 * Funtion to get the Navigation Items from Section Tag
 * */
const getNavigationItems = () => {
  const navItems = [];
  const sections = document.getElementsByTagName("section");
  for (let i = 1; i <= sections.length; i++) {
    navItems.push(`${SECTION_PREFIX}-${i}`);
  }
  return navItems;
};

/**
 * Scroll event used to navigate to section
 * @param {*} sectionIndex : the index of section where we need to navigate to.
 */
const navigateToSection = (event) => {
  event.preventDefault();
  const sectionIndex = event.target.id;
  const section = document.getElementsByTagName("section")[sectionIndex];
  section.scrollIntoView({
    behavior: "smooth",
    inline: "center",
  });
};

/**
 * Logic to add Navigation bar inside the nav bar list class
 */
const addNavigationBar = () => {
  const navBarParent = document.getElementById("navbar__list");
  const navItems = getNavigationItems();
  navItems.forEach((sectionItem, index) => {
    const li = document.createElement("li");
    li.id = index;
    document.addEventListener("click", navigateToSection)
    li.appendChild(document.createTextNode(sectionItem));
    if (index == 0) {
      li.className = ACTIVE_CLASS;
    }
    navBarParent.appendChild(li);
  });
};

/**
 * Logic to check if any section is in viewport
 * @param {*} section: The scrollable section
 * @returns boolean: true or false
 */
const isInViewport = (section) => {
  const rect = section.getBoundingClientRect();
  return rect.top < window.innerHeight / 2;
};

/**
 * Removing the last active class from section and list
 */
const removeLastActiveClasses = () => {
  const lastActiveSecton = document.querySelector("section.active");
  const lastActiveList = document.querySelector("li.active");
  lastActiveSecton.className = "";
  lastActiveList.className = "";
};

/**
 * Manages the logic to add/ remove active classes
 */
const scrollListener = () => {
  const sections = document.getElementsByTagName("section");
  const lists = document.getElementsByTagName("li");
  const scroll = () => {
    for (let i = 0; i < sections.length; i++) {
      if (isInViewport(sections[i])) {
        removeLastActiveClasses(i);
        sections[i].className = ACTIVE_CLASS;
        lists[i].className = ACTIVE_CLASS;
      }
    }
  };
  document.addEventListener("scroll", scroll);
};

/**
 * Main Funtion
 */
window.onload = () => {
  addNavigationBar();
  scrollListener();
};
