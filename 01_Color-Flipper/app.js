//to choose color from array
const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "pink", "yellow"];
//button
const btn = document.getElementById("btn");
//span
const color = document.querySelector(".color");

//button listener
btn.addEventListener("click", function () {
  //get random number of 'colors' array
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  //-------------------------------
  //set body's background to random  color of 'colors' array
  document.body.style.backgroundColor = colors[randomNumber];
  //set span text (color name & number)
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  //random color from array 'colors'
  return Math.floor(Math.random() * colors.length);
}
