const gridSize = 256;
let container = document.querySelector("#container");

for (let i = 0; i < gridSize; i++) {
  const gridSquare = document.createElement("div");
  gridSquare.className = "grid-square";
  container.appendChild(gridSquare);
  changeColour();
}

function changeColour() {
  let squares = document.querySelectorAll("div.grid-square");
  squares.forEach((element) => {
    element.addEventListener("mouseover", () => {
      element.style.backgroundColor = "red";
    });
    element.addEventListener("mouseout", () => {
      element.style.backgroundColor = "";
    });
  });
}

function mouseOver() {
  document.getElementsByClassName("grid-square").style.color = "red";
}

function mouseOut() {
  document.getElementsByClassName("grid-square").style.color = "";
}

// Add a hover effect to the squares using event listeners in the for loop
// Change the div's background colour while mouse is hovering

// Add a button to top of screen
// Ask for user to enter a number that will create a nxn grid
// If number > 100 or < 0, ask for another number
// Use functions where appropriate to clean code up
