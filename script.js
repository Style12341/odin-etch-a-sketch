function makeGrid(rows, cols) {
  let gridContainer = document.querySelector("#grid-container");
  for (let i = 0; i < rows; i++) {
    let row = document.createElement("div");
    row.className = "row";
    for (let i = 0; i < cols; i++) {
      let cell = document.createElement("div");
      cell.className = "cell";
      cell.addEventListener("mouseenter", (e) => {
        if (document.querySelector(".random-state").textContent === "ON") {
          let r = Math.floor(Math.random() * 255) + 1;
          let g = Math.floor(Math.random() * 255) + 1;
          let b = Math.floor(Math.random() * 255) + 1;
          brushColor = `rgb(${r},${g},${b})`;
          colorPicker.value = brushColor;
        } else {
          brushColor = colorPicker.value;
        }
        if (e.ctrlKey) {
          cell.style.backgroundColor = "white";
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
let randomRGB = document.querySelector("#random-rgb");

randomRGB.addEventListener("click", (e) => {
  let state = document.querySelector(".random-state");
  if (state.textContent === "OFF") {
    state.textContent = "ON";
  } else {
    state.textContent = "OFF";
  }
});
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
