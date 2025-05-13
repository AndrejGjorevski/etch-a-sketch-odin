const container = document.getElementById("container");
for (let i = 0; i < 256; i++) {
    container.appendChild(document.createElement("div"));
}

const board = container.querySelectorAll("div");
board.forEach(box => 
    box.addEventListener("mouseenter", (e) => e.target.style.backgroundColor = "black")
)