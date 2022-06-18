
// Get the button in variable
let klaxon = document.getElementById("klaxon");
let tambour = document.getElementById("tambour");
let oogah = document.getElementById("oogah");
let rire = document.getElementById("rire");


// Get the music in variable
const soundKlaxon = new Audio("media/sounds/klaxon.wav");
const soundTambour = new Audio("media/sounds/tambour.wav");
const soundoogah = new Audio("media/sounds/oogah.wav");
const soundRire = new Audio("media/sounds/rire.wav");

// Add event on click
klaxon.addEventListener("click", playKlaxon);
tambour.addEventListener("click", playTambour);
oogah.addEventListener("click", playOogah);
rire.addEventListener("click", playRire);


// Function
function playKlaxon() {
    soundKlaxon.play()
    console.log("Je suis un klaxon");
}

function playTambour() {
    soundTambour.play()
    console.log("Je suis un tambour");
}

function playOogah() {

    soundoogah.play()
    console.log("Je suis un oogah");
}

function playRire() {
    soundRire.play()
    console.log("Je suis un rire");
}