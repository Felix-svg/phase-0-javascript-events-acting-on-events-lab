//const { color } = require("mocha/lib/reporters/base");

// Your code here
const dodger = document.getElementById('dodger');
dodger.style.backgroundColor = '#FF69B4';
dodger.style.bottom = '0px';

// document.addEventListener("keydown", function (event) {
//     if (event.key === "ArrowLeft") {
//       const leftNumbers = dodger.style.left.replace("px", "");
//       const left = parseInt(leftNumbers, 10);
  
//       dodger.style.left = `${left - 1}px`;
//     }else if(event.key === "ArrowRight"){
//       const leftNumbers = dodger.style.left.replace("px", "");
//       const left = parseInt(leftNumbers, 10);

//       dodger.style.left = `${left + 1}px`;
//   });

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if(left > 0){
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left < 360){
    dodger.style.left = `${left + 1}px`;
  }
}

document.addEventListener('keydown', function(e){
  if (e.key === 'ArrowLeft'){
    moveDodgerLeft();
  } else if(e.key === 'ArrowRight'){
    moveDodgerRight();
  }
});