const button = document.getElementById("btn");
const container = document.getElementById("container");

function createGrid(n) {
    container.innerHTML = "";

    let boxSize = 960 / n;
    for (let i = 0; i < n * n; i++) {
        let div = document.createElement("div");
        div.style.width = boxSize + "px";
        div.style.height = boxSize + "px";
        container.appendChild(div);
        div.addEventListener("mouseenter", (e) => e.target.style.backgroundColor = "black");
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

