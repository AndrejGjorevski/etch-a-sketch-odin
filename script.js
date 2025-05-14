const button = document.getElementById("btn");
const container = document.getElementById("container");

function generateRandomColor() {
    let redVal = Math.floor(Math.random() * 256);
    let blueVal = Math.floor(Math.random() * 256);
    let greenVal = Math.floor(Math.random() * 256);
    return `rgb(${redVal}, ${blueVal}, ${greenVal}, 0.1)`;
}

function updateOpacity(boxColor) {
    let newOpacity = parseFloat(boxColor[3]);
    newOpacity += 0.1;
    if (newOpacity >= 1.0) {
        return;
    } else {
        boxColor[3] = newOpacity;
        return boxColor.join(",");
    }
}

function createGrid(n) {
    container.innerHTML = "";

    let boxSize = 960 / n;
    for (let i = 0; i < n * n; i++) {
        let div = document.createElement("div");
        div.style.width = boxSize + "px";
        div.style.height = boxSize + "px";
        container.appendChild(div);
        let randomColor = generateRandomColor();
        div.addEventListener("mouseenter", (e) => {
            if (e.target.style.backgroundColor == "") {
                e.target.style.backgroundColor = randomColor;
            } else {
                let boxColor = e.target.style.backgroundColor.split(",");
                e.target.style.backgroundColor = updateOpacity(boxColor);
            }
        });
    }
}

createGrid(16);

button.addEventListener("click", (e) => {
    n = prompt("How many boxes per row (less than 100): ");
    n = parseInt(n);
    if (isNaN(n) || n <= 0 || n > 100) {
        alert("Please enter a valid number between 0 and 100");
        return;
    }

    createGrid(n);
});

