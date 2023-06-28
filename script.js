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

function getInput() {
  let input = parseInt(prompt("Please enter the size of the grid"));
  const container = document.querySelector("#container");

  if (input <= 100 && input > 0) {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    document.documentElement.style.setProperty("--size-of-grid", input);
    makeGrid(input, container);
  } else {
    alert("This is not a valid size. Please enter a grid size between 1-100");
  }
}

function makeGrid(sizeofGrid, container) {
  const width = container.offsetWidth;
  const height = container.offsetHeight;
  const gridSquareWidth = width / sizeofGrid;
  const gridSquareHeight = height / sizeofGrid;
  for (let i = 0; i < sizeofGrid * sizeofGrid; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.style.width = `${gridSquareWidth}px`;
    gridSquare.style.height = `${gridSquareHeight}px`;
    gridSquare.className = "user-grid";
    gridSquare.addEventListener("mousedown", randomiseColour);
    gridSquare.addEventListener("mouseover", randomiseColour);
    gridSquare.addEventListener("mouseout", () => {
      setTimeout(() => {
        gridSquare.style.backgroundColor = "";
      }, 1000);
    });

    gridSquare.style.height = container.appendChild(gridSquare);
  }
}

const randomiseColour = (gridSquare) => {
  gridSquare.target.style.backgroundColor = randomColor();
};

function randomColor() {
  let colour = [];
  for (let i = 0; i < 3; i++) {
    colour.push(Math.floor(Math.random() * 256));
  }
  return "rgb(" + colour.join(", ") + ")";
}

// Add a hover effect to the squares using event listeners in the for loop
// Change the div's background colour while mouse is hovering

// Add a button to top of screen
// Ask for user to enter a number that will create a nxn grid
// If number > 100 or < 0, ask for another number
// Use functions where appropriate to clean code up
