const container = document.getElementById("container");
const input = document.getElementById("sideSlider");
const sizeValue = document.getElementById("sizeValue");
const inputValue = +input.value;
const clear = document.getElementById("clear");


sizeValue.textContent = input.value
input.addEventListener("input", (event) => {
  sizeValue.textContent = event.target.value
})

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    
  
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
    
    clear.addEventListener("click", () =>{
        cell.style.backgroundColor = "white";
    })  
    cell.addEventListener('mouseover', (event) => {
        let red = Math.floor(Math.random()*256 );
        let blue = Math.floor(Math.random()*256 );
        let green = Math.floor(Math.random()*256 );
        cell.style.backgroundColor = "rgb("+red+","+green+","+blue+")";
    })
  } 



};



makeRows(inputValue, inputValue);