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
          cell.style.backgroundColor = brushColor;
        } else cell.style.backgroundColor = brushColor;
      });
      row.appendChild(cell);
    }
    gridContainer.appendChild(row);
  }
}
let brushColor = "black";
let colorPicker = document.querySelector("#color-picker");
let gridContainer = document.querySelector("#grid-container");

colorPicker.addEventListener("input", (e) => {
  brushColor = e.target.value;
});

makeGrid(16, 16);
