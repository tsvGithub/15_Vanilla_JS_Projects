const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//button
const btn = document.getElementById("btn");
//span
const color = document.querySelector(".color");

//button listener
btn.addEventListener("click", function () {
  //hex colors start from #
  let hexColor = "#";
  //loop through 'hex' array
  for (let i = 0; i < 6; i++) {
    //and add to 'hexColors #' one random
    //number at once to get 6 digits/letter
    //for hex color
    hexColor += hex[getRandomNumber()];
  }
  //set text of hex in span
  color.textContent = hexColor;
  //set body's bgd to 'hexColor'
  document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  //random number in array 'hex'
  return Math.floor(Math.random() * hex.length);
}
