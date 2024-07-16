const container = document.querySelector("#container");

function makeDivs(divNum) {
    for (let i=0; i<divNum; i++) {
        const square = document.createElement("div");
        square.id = "s"+i;
        square.className = "square";
    }
}

makeDivs(256);
container.appendChild(square);