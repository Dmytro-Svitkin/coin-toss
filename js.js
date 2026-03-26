let heads, tails, edge, bottom, clickArea;

function Start() {
    heads = document.getElementById("heads");
    tails = document.getElementById("tails");
    edge = document.getElementById("edge");
    bottom = document.getElementById("bottom");
    clickArea = document.getElementById("click-area");
};

function Toss() {
    let random = Math.floor(Math.random() * (12 - 5 + 1)) + 5;
    let time = random/1.5;
    console.log(random);
    clickArea.style.display = "none";
    heads.style.transform = "scaleY(1)";
    setTimeout(() => {clickArea.style.display = "block"; heads.style.transform = "scaleY(0.5)";}, 500);
};

