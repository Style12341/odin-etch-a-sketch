function makeGrid(rows, cols) {
  let gridContainer = document.querySelector("#grid-container");
  for (let i = 0; i < rows; i++) {
    let row = document.createElement("div");
    row.className = "row";
    for (let i = 0; i < cols; i++) {
      let cell = document.createElement("div");
      cell.className = "cell";
      cell.addEventListener("mouseenter", (e) => {
        if (e.ctrlKey) {
          cell.style.backgroundColor = "white";
        }else
        cell.style.backgroundColor = "black";
      });
      row.appendChild(cell);
    }
    gridContainer.appendChild(row);
  }
}
let gridContainer = document.querySelector("#grid-container");
makeGrid(30, 30);
