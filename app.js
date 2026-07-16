document.getElementById("enter-btn").addEventListener("click", () => {
  document.getElementById("cosmic-gate").classList.add("hidden");
  document.getElementById("navigation-matrix").classList.remove("hidden");
});

/* STAR MAP MODE */
const starCanvas = document.getElementById("starCanvas");
const ctx = starCanvas.getContext("2d");
starCanvas.width = window.innerWidth;
starCanvas.height = 400;

function drawStars() {
  for (let i = 0; i < 200; i++) {
    ctx.fillStyle = "white";
    ctx.fillRect(Math.random() * starCanvas.width, Math.random() * starCanvas.height, 2, 2);
  }
}
drawStars();

/* TRIANGULAR GEOMETRY MODE */
const triGrid = document.querySelector(".triangle-grid");
for (let i = 0; i < 12; i++) {
  const tri = document.createElement("div");
  tri.classList.add("triangle");
  triGrid.appendChild(tri);
}

/* ORBITAL NODE MODE */
const orbitSystem = document.getElementById("orbit-system");
for (let i = 1; i <= 9; i++) {
  const node = document.createElement("div");
  node.classList.add("orbit-node");
  node.innerText = `R${i}`;
  orbitSystem.appendChild(node);
}

/* COSMIC CORRIDOR MODE */
const corridor = document.querySelector(".corridor");
corridor.innerHTML = "<p>Walking the Cosmic Corridor...</p>";