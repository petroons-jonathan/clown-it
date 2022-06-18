// Get the button in variable
//Global

let currentTrack;
let isPlaying;
const playPauseButton = document.getElementById("playerButton");

// First Column
const klaxon = document.getElementById("klaxon");
const tambour = document.getElementById("tambour");
const oogah = document.getElementById("oogah");
const rire = document.getElementById("rire");

//Ivan contribution
//Second Column
const fouet = document.getElementById("fouet");
const vache = document.getElementById("vache");
const punch = document.getElementById("punch");
const willem = document.getElementById("willem");

//Third Column
const indy = document.getElementById("indiana-jones");
const fboyard = document.getElementById("fboyard");
const manger = document.getElementById("manger");
const starwars = document.getElementById("star");

// Get the music in variable
// First Column
const soundKlaxon = new Audio("media/sounds/klaxon.wav");
const soundTambour = new Audio("media/sounds/tambour.wav");
const soundoogah = new Audio("media/sounds/oogah.wav");
const soundRire = new Audio("media/sounds/rire.wav");

// Ivan contribution
// Second Column
const soundFouet = new Audio(
  "https://www.cjoint.com/doc/17_02/GBci3fpY43h_Coup-de-fouet-bruitage-.mp3"
);
const soundVache = new Audio("media/sounds/vache.mp3");
const soundPunch = new Audio(
  "http://www.slspencer.com/Sounds/Three%20Stooges/CJSH.wav"
);
const soundWillem = new Audio("media/sounds/crie.wav");

// Third Column
const soundIJones = new Audio("media/sounds/Indiana-Jones.mp3");
const soundFBoyard = new Audio(
  "https://www.cjoint.com/doc/20_06/JFhrNP5nJ5d_musique-fort-boyard.mp3"
);
const soundManger = new Audio("media/sounds/manger-chef.mp3");
const soundSWars = new Audio("media/sounds/March-Imperial.mp3");

// Add event on click
// Global


// First column
klaxon.addEventListener("click", playKlaxon);
tambour.addEventListener("click", playTambour);
oogah.addEventListener("click", playOogah);
rire.addEventListener("click", playRire);

// Ivan contribution
//Second Column
fouet.addEventListener("click", playFouet);
vache.addEventListener("click", playVache);
punch.addEventListener("click", playPunch);
willem.addEventListener("click", playWillem);

// Third Column
indy.addEventListener("click", playIndy);
fboyard.addEventListener("click", playFBoyard);
manger.addEventListener("click", playManger);
starwars.addEventListener("click", playSWars);


// Function
// First column
function playKlaxon() {
  currentTrack = soundKlaxon;
  playTrack();
  console.log("Je suis un klaxon");
}

function playTambour() {
  currentTrack = soundTambour;
  playTrack();
  console.log("Je suis un tambour");
}

function playOogah() {
  currentTrack = soundoogah;
  playTrack();
  console.log("Je suis Ougah Ougah");
}

function playRire() {
  currentTrack = soundRire;
  playTrack();
  console.log("Je suis un rire machiavélique");
}

//Ivan contribution
// Second Column
function playFouet() {
  currentTrack = soundFouet;
  playTrack();
  console.log("Je suis un fouet (non sexuel)");
}

function playVache() {
  currentTrack = soundVache;
  playTrack();
  console.log("Je suis une vache");
}

function playPunch() {
  currentTrack = soundPunch;
  playTrack();
  console.log("Je suis One Punch Man");
}

function playWillem() {
  currentTrack = soundWillem;
  playTrack();
  console.log("Je suis Willem");
}

// Third Column

function playIndy() {
  currentTrack = soundIJones;
  playTrack();
  console.log("Je suis un aventurier");
}

function playFBoyard() {
  currentTrack = soundFBoyard;
  playTrack();
  console.log("Je suis un Boyard");
}
function playManger() {
  currentTrack = soundManger;
  playTrack();
  console.log("Je suis un affamé");
}
function playSWars() {
  currentTrack = soundSWars;
  playTrack();
  console.log("Je suis un Sith ou un Jedi mais pas Jar Jar Bin");
}

function playPauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
}

function playTrack(){
    // Play the loaded track
    currentTrack.play();
    isPlaying = true;
}

function pauseTrack(){
    // Pause the loaded track
    currentTrack.stop();
    isPlaying = false;
}




// function playpauseTrack() {
//   // Switch between playing and pausing
//   // depending on the current state
//   if (!isPlaying) playTrack();
//   else pauseTrack();
// }
  
// function playTrack() {
//   // Play the loaded track
//   currentTrack.play();
//   isPlaying = true;
  
//   // Replace icon with the pause icon
//   klaxon.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
// }
  
// function pauseTrack() {
//   // Pause the loaded track
//   currentTrack.pause();
//   isPlaying = false;
  
//   // Replace icon with the play icon
//   klaxon.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
// }