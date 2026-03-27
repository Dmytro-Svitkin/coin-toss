let heads, tails, edge, bottom, clickArea;
let state = "heads"

function range(x, y = undefined, z = 1) {
    if (y == undefined) {y = 0} else {let recol = x; x = y; y = recol;}
    let recol = [];
    for (let i = y; i < x; i += z) {
        recol.push(i);
    }
    return recol;
}

function Start() {
    heads = document.getElementById("heads");
    tails = document.getElementById("tails");
    edge = document.getElementById("edge");
    bottom = document.getElementById("bottom");
    clickArea = document.getElementById("click-area");
};

function FlipHeads() {      
    heads.style.opacity = "1"; tails.style.opacity = "0";
    heads.style.transformOrigin = "center 43.75%"; tails.style.transformOrigin="center 56.25%"; bottom.style.transformOrigin = "center 56.25%";
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
    state = "tails"
}

function FlipTails() {
    heads.style.opacity = "0"; tails.style.opacity = "1";
    heads.style.transformOrigin = "center 56.25%"; tails.style.transformOrigin="center 43.75%"; bottom.style.transformOrigin = "center 56.25%";
    heads.style.transform = "scale(1, 0)";
    tails.style.transform = "scale(1, 0)";
    edge.style.transform = "scale(1, 1)";
    bottom.style.transform = "scale(1, 0)";
    setTimeout(() => {
        heads.style.opacity = "1"; tails.style.opacity = "0";
        bottom.style.transformOrigin = "center 43.75%";
        heads.style.transform = "scale(1, 1)";
        tails.style.transform = "scale(1, 1)";
        edge.style.transform = "scale(1, 0)";
        bottom.style.transform = "scale(1, 1)";
    }, 310);
    state = "heads"
}

function Flip(){
    if (state == "heads"){FlipHeads()}
    else if (state == "tails"){FlipTails()}
}

function Toss() {
    let random = Math.floor(Math.random() * (12 - 5 + 1)) + 5;
    console.log(random);
    clickArea.style.display = "none";
    for (let i of range(random)){
        setTimeout(() => {Flip();}, 910*i)
    }
    setTimeout(() => {clickArea.style.display = "block";}, random*1000);
};

