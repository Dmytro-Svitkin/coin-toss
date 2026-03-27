let heads, tails, edge, bottom, clickArea;

function Start() {
    heads = document.getElementById("heads");
    tails = document.getElementById("tails");
    edge = document.getElementById("edge");
    bottom = document.getElementById("bottom");
    bottomT = document.getElementById("bottom-t");
    clickArea = document.getElementById("click-area");
};

function Toss() {
    let random = Math.floor(Math.random() * (12 - 5 + 1)) + 5;
    let time = random/1.5;
    console.log(random);
    /*clickArea.style.display = "none";*/
    heads.style.transform = "scaleY(0)";
    edge.style.transform = "scaleY(1)";
    bottom.style.transform = "scaleY(0)";
    bottomT.style.transform = "translateY(12.5%)";
    setTimeout(() => {
        heads.style.transform = "scaleY(1)";
        edge.style.transform = "scaleY(0)";
        bottom.style.transform = "scaleY(1)";
        bottomT.style.transform = "translateY(0)";
    }, 750);
    /*setTimeout(() => {clickArea.style.display = "block";}, random*1000-500);*/
};

