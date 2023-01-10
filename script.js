const container = document.getElementById("container");
const input = document.getElementById("sideSlider");
const sizeValue = document.getElementById("sizeValue");

const clear = document.getElementById("clear");

sizeValue.textContent = input.value


function makeRows(size) {


  for (c = 0; c < (size* size); c++) {

    let cell = document.createElement("span");
    container.appendChild(cell).className = "grid-item";
    container.style.gridTemplateColumns = "repeat("+size+",1fr)";
    container.style.gridTemplateRows = "repeat("+size+",1fr)";
    
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
input.addEventListener("input", (event) => {
    sizeValue.textContent = event.target.value
    input.value = sizeValue.textContent;
    var inputValue = sizeValue.textContent;
  })


  makeRows(28,28);
  
