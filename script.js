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
makeGrid(16, 16);
let brushColor = "black";
let colorPicker = document.querySelector("#color-picker");
let gridContainer = document.querySelector("#grid-container");
let gridSizeInput = document.querySelector("#grid-size");
colorPicker.addEventListener("input", (e) => {
  brushColor = e.target.value;
});
gridSizeInput.addEventListener("input", (e) => {
  if (e.target.value < 1) e.target.value = 1;
  if (e.target.value > 100) e.target.value = 100;
  let size = e.target.value;
  gridContainer.innerHTML = "";
  makeGrid(size, size);
});
