const container = document.getElementById("container");
for (let i = 0; i < 256; i++) {
    container.appendChild(document.createElement("div"));
}

function colorBox(event) {
    event.target.style.backgroundColor = "black";
}

const board = container.querySelectorAll("div");
board.forEach(box => {
    box.addEventListener("mouseenter", colorBox);
});