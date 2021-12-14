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

// get the secions
// add the secions inside nav bar
const SECTION_PREFIX = "SECTION";

const getNavigationItems = () => {
  const navItems = [];
  const sections = document.getElementsByTagName("section");
  for (i = 1; i <= sections.length; i++) {
    navItems.push(`${SECTION_PREFIX}-${i}`);
  }
  return navItems;
};



const navigateToSection = (sectionIndex) => {
  
  const section = document.getElementsByTagName("section")[sectionIndex];
  section.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "center",
  });
};

const addNavigationBar = () => {
  const navBarParent = document.getElementById("navbar__list");
  const navItems = getNavigationItems();
  navItems.forEach((sectionItem, index) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(sectionItem));
    li.onclick = () => {
      navigateToSection(index);
    };
    if (index == 0) {
      li.className = "active";
    }
    navBarParent.appendChild(li);
  });
};
// check if element is visible
const isInViewport =(el) => {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight/2
}

const removeLastActiveClasses = () => {
    const lastActiveSecton = document.querySelector("section.active");
    const lastActiveList =  document.querySelector("li.active");
    lastActiveSecton.className = "";
    lastActiveList.className = "";
}

const scrollListener = () => {
    const sections = document.getElementsByTagName("section");
    const lists = document.getElementsByTagName("li");
    const scroll = () => {
        for (i = 0; i < sections.length; i++) {
            if(isInViewport(sections[i])) {
                removeLastActiveClasses(i);
                sections[i].className = "active";
                lists[i].className = "active";
            }
          }
    }
    document.addEventListener('scroll', scroll);
}


window.onload = () => {
  addNavigationBar();
  scrollListener();
};

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
