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

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navbar__list=document.querySelector('#navbar__list');

const button1=document.querySelector('#testing');
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


 /* build the nav
dynamically added navigation bar that connects to the sections via ID
*/


const sections = Array.from(document.getElementsByTagName("section"));
for(section of sections){
  const listItem = document.createElement('li');
  const listItemLink=document.createElement('a');

  listItemLink.innerHTML=`<a href="#${section.id}" data-nav="${section.id}" class="menu__link">${section.dataset.nav}</a>`;
  listItem.appendChild(listItemLink);
  navbar__list.appendChild(listItem);
}




// Add class 'active' to section when near top of viewport

/* 
 
 function observerCallback takes two paranaters (entries & observer) to observe the section to specify which section on the viewport and its link
*/
// IntersectionObserver takes an options object which contains three properties
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.7,
};
function observerCallback(entries, observer) {
       
  entries.forEach((entry) => {
    // get the nav item corresponding to the custom data attributes of the section that is currently in view
    const navItem = navbar__list.querySelector(`[data-nav=${entry.target.id}]`); 
    if (entry.isIntersecting) {

     
       
      // add 'active' class on the navItem and 'your-active-class' to the target which is the section when the entry is in the viewpoint
      navItem.classList.add('active');
      entry.target.classList.add('your-active-class');

    }
    else if (!entry.isIntersecting){
      /* remove 'active' class on the navItem and 'your-active-class' to the target which is the section when the entry isn't in the viewpoint */
      navItem.classList.remove('active');
      entry.target.classList.remove('your-active-class');
    }
  });
}
const observer = new IntersectionObserver(observerCallback, observerOptions);
document.querySelectorAll("section").forEach((section) => observer.observe(section));



//smooth_scroll adds smooth scrolling behavior to all links that are available on the page
function smooth_scroll(){
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});  
} smooth_scroll();



// function onscroll makes the header invisible when the user stops scrolling for 5 seconds
const Header = document.querySelector('.page__header')
 let isScrolling;
 document.onscroll=() => { 
   Header.style.display="block";
   clearTimeout(isScrolling)
   isScrolling = setTimeout(() => {
    Header.style.display="none";
   },5000);
 
 };

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 


// Scroll to section on link click

// Set sections as active


