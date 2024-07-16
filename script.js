const container = document.querySelector("#container");
let divNum = 16;

function makeDivs() {
    for (let i=1; i<=divNum**2; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.classList.add(`square-${i}`);
        container.appendChild(square);
        square.setAttribute("style", `height: ${(1000-(2*divNum))/divNum}px; 
        width: ${(1000-(2*divNum))/divNum}px;`)
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

makeDivs();
hoveringColor();