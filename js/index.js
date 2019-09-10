// Your code goes here

// MOUSE OVER
const headerImage = document.querySelector('.intro img');
headerImage.addEventListener('mouseover', (event) => {
  headerImage.style.transform = 'rotate(180deg)'
});

// KEY DOWN
let siteBG = document.querySelector('body');
siteBG.addEventListener('keydown', (event) => {
  siteBG.style.background = 'orange';
})

// WHEEL
siteBG.addEventListener("wheel", (event) => {
  siteBG.style.background = "lightgray";
});

// DRAG
headerImage.addEventListener('drag', (event) => {
  headerImage.style.transform = 'scale(1.2)';
})

// LOAD
const navLogo = document.querySelector(".logo-heading");
window.addEventListener("load", (event) => {
  navLogo.style.color = "orange";
});
// SELECT
navLogo.addEventListener ('select', (event) => {
  navLogo.style.color = 'purple'
})


// RESIZE
const body = document.querySelector('body');
window.addEventListener ('resize', (event) => {
  body.style.background = 'green';
})
// SCROLL
window.addEventListener ('scroll', (event) => {
  body.style.background = 'purple';
})


//NEST TO SIMILAR EVENTS -- STOP PROPGATION -- PREVENT DEFAULT -- FOCUS --
const navLinks = document.querySelectorAll('a');
navLinks.forEach(navItem => {
  navItem.addEventListener("focus", (event) => {
    event.stopPropagation();
    navItem.style.color = "red";
  });
  navItem.addEventListener('dblclick', (event) => {
    event.stopPropagation();
    event.preventDefault();
    navItem.style.textDecoration = "underline";
  })
});
