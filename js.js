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
    /*clickArea.style.display = "none";*/
    heads.style.opacity = "1"; tails.style.opacity = "0";
    bottom.style.transformOrigin = "center 56.25%";
    heads.style.transform = "scale(1, 0)";
    tails.style.transform = "scale(1, 0)";
    edge.style.transform = "scale(1, 1)";
    bottom.style.transform = "scale(1, 0)";

    setTimeout(() => {
        heads.style.opacity = "0"; tails.style.opacity = "1";
        bottom.style.transformOrigin = "center 43.75%";
        heads.style.transform = "scale(1, 1)";
        tails.style.transform = "scale(1, 1)";
        edge.style.transform = "scale(1, 0)";
        bottom.style.transform = "scale(1, 1)";
    }, 310);
    /*setTimeout(() => {clickArea.style.display = "block";}, random*1000-500);*/
};

