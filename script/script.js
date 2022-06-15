let klaxon = document.getElementById("klaxon");
let tambour = document.getElementById("tambour");
let oogah = document.getElementById("oogah");
let rire = document.getElementById("rire");

klaxon.addEventListener("click", playKlaxon);

function playKlaxon() {
    const soundKlaxon = new Audio("media/sounds/klaxon.wav");
    soundKlaxon.play()
    console.log("Je suis un klaxon");
}

tambour.addEventListener("click", playTambour);

function playTambour() {
    const soundTambour = new Audio("media/sounds/tambour.wav");
    soundTambour.play()
    console.log("Je suis un tambour");
}

oogah.addEventListener("click", playOogah);

function playOogah() {
    const soundoogah = new Audio("media/sounds/oogah.wav");
    soundoogah.play()
    console.log("Je suis un oogah");
}

rire.addEventListener("click", playRire);

function playRire() {
    const soundRire = new Audio("media/sounds/rire.wav");
    soundRire.play()
    console.log("Je suis un rire");
}