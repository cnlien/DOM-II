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
window.addEventListener("load", function() {
  navLogo.style.color = "orange";
});

// FOCUS

// RESIZE
// * [ ] `scroll`
// * [ ] `select`
// * [ ] `dblclick`

//NEST TO SIMILAR EVENTS -- STOP PROPGATION -- PREVENT DEFAULT
