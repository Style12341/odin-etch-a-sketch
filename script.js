function makeGrid(rows, cols) {
  let gridContainer = document.querySelector("#grid-container");
  for (let i = 0; i < rows; i++) {
    let row = document.createElement("div");
    row.className = "row";
    for (let i = 0; i < cols; i++) {
      let cell = document.createElement("div");
      cell.className = "cell";
      cell.addEventListener("mouseenter", (e) => {
        let opacity = 1;
        if (document.querySelector(".progressive-state").textContent === "ON") {
          if (window.getComputedStyle(cell).backgroundColor.split(",").length > 3) {
            opacity = parseFloat(window.getComputedStyle(cell).backgroundColor.split(",")[3].split(")")[0]);
            console.log(opacity);
            if (opacity < 1) {
              opacity += 0.1;
            }
            opacity = Math.min(1.0, opacity).toFixed(1);
          }
        }
        if (document.querySelector(".random-state").textContent === "ON") {
          let r = Math.floor(Math.random() * 255) + 1;
          let g = Math.floor(Math.random() * 255) + 1;
          let b = Math.floor(Math.random() * 255) + 1;
          brushColor = `rgb(${r},${g},${b},${opacity})`;
          colorPicker.value = brushColor;
        } else {
          let RGBArray = colorPicker.value.slice(4, 9).split(",")[0];
          brushColor = `rgb(${RGBArray[0]},${RGBArray[1]},${RGBArray[2]},${opacity})`;
        }
        if (e.ctrlKey) {
          cell.style.backgroundColor = "rgb(0,0,0,0)";
        } else cell.style.backgroundColor = brushColor;
      });
      row.appendChild(cell);
    }
    gridContainer.appendChild(row);
  }
}
let brushColor = "rgb(0,0,0,0)";
let colorPicker = document.querySelector("#color-picker");
let gridContainer = document.querySelector("#grid-container");
let gridSizeInput = document.querySelector("#grid-size");
let randomRGB = document.querySelector("#random-rgb");
let resetButton = document.querySelector("#reset");
let progressiveButton = document.querySelector("#progressive");
let size = 16;
makeGrid(size, size);
resetButton.addEventListener("click", () => {
  gridContainer.innerHTML = "";
  makeGrid(size, size);
});
progressiveButton.addEventListener("click", () => {
  let state = document.querySelector(".progressive-state");
  if (state.textContent === "OFF") {
    state.textContent = "ON";
  } else {
    state.textContent = "OFF";
  }
});
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
  size = e.target.value;
  gridContainer.innerHTML = "";
  makeGrid(size, size);
});
