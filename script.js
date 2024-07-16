const container = document.querySelector("#container");
const btnOne = document.querySelector("#btnOne");
const btnTwo = document.querySelector("#btnTwo");

function makeDivs(divNum) {
    for (let i=1; i<=divNum**2; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
        square.setAttribute("style", `height: ${(1000-(2*divNum))/divNum}px; 
        width: ${(1000-(2*divNum))/divNum}px;`)
        hoveringColor();
    }
}

function hoveringColor() {
    let squares = document.getElementsByClassName("square");
    for(let i=0; i<squares.length; i++) {
        squares[i].addEventListener("mousedown", () => isDrawing = true);
        squares[i].addEventListener("mouseup", () => isDrawing = false);
        squares[i].addEventListener("mousemove", function() {
            if (isDrawing) {
                this.style.backgroundColor = "black";
            }
        });
    }
}

const clearCanvas = ()=> {
    let squares = document.getElementsByClassName("square");
    squares = Array.from(squares); 
    for (i=0 ; i < squares.length ; i++) {
        squares[i].remove();
    }
}

const makeCanvas = ()=> {
    let sideLength = prompt("Enter number of squares per side!");
    if (sideLength>100) {
        sideLength = 100;
    }
    makeDivs(sideLength);
}

btnOne.addEventListener("click", clearCanvas);
btnTwo.addEventListener("click", makeCanvas);

