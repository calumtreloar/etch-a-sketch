const gridSize = 256;
let container = document.querySelector("#container");

for (let i = 0; i < gridSize; i++) {
  const gridSquare = document.createElement("div");
  gridSquare.className = "grid-square";
  container.appendChild(gridSquare);
}
