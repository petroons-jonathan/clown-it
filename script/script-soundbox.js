// Get the button in variable
//Global

let currentTrack;
let isPlaying = false;
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


// Icon variable
iconPause = '<img class="icon" src="media/img/pause.png">';

iconSWars = '<img class="icon" src="media/img/lightsaber.png">';
iconManger = '<img class="icon" src="media/img/manger.png">';
iconFBoyard = '<img class="icon" src="media/img/fort.png">';
iconIndy = '<img class="icon" src="media/img/adventurer.png">';

iconWillem = '<img class="icon" src="media/img/willem.png">';
iconPunch = '<img class="icon" src="media/img/punch.png">';
iconVache = '<img class="icon" src="media/img/vache.png">';
iconFouet = '<img class="icon" src="media/img/fouet.png">';

iconRire = '<img class="icon" src="media/img/scared.png">';
iconOogah = '<img class="icon" src="media/img/horn.png">';
iconTambour = '<img class="icon" src="media/img/tambour.png">';
iconKlaxon = '<img class="icon" src="media/img/klaxon.png">';

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
  currentElement = klaxon;
  initialIcon = iconKlaxon;
  togglePlay();
  console.log("Je suis un klaxon");
}

const endKlaxon = soundKlaxon.onended = function() {
  klaxon.innerHTML = iconKlaxon;
};

function playTambour() {
  currentTrack = soundTambour;
  currentElement = tambour;
  initialIcon = iconTambour;
  timer = currentTrack.duration;
  togglePlay();
  console.log("Je suis un tambour");
  console.log(timer);
}

const endTambour = soundTambour.onended = function () {
  tambour.innerHTML = iconTambour;
}



function playOogah() {
  currentTrack = soundoogah;
  currentElement = oogah;
  initialIcon = iconOogah;
  togglePlay();
  console.log("Je suis Ougah Ougah");
}

const endOogah = soundoogah.onended = function() {
  oogah.innerHTML = iconOogah;
};

function playRire() {
  currentTrack = soundRire;
  currentElement = rire;
  initialIcon = iconRire;
  togglePlay();
  console.log("Je suis un rire machiavélique");
}

const endRire = soundRire.onended = function() {
  rire.innerHTML = iconRire;
};

//Ivan contribution
// Second Column
function playFouet() {
  currentTrack = soundFouet;
  currentElement = fouet;
  initialIcon = iconFouet;
  togglePlay();

  console.log("Je suis un fouet (non sexuel)");
}

const endFouet = soundFouet.onended = function() {
  fouet.innerHTML = iconFouet;
};

function playVache() {
  currentTrack = soundVache;
  currentElement = vache;
  initialIcon = iconVache;
  togglePlay();
  console.log("Je suis une vache");
}

const endVache = soundVache.onended = function() {
  vache.innerHTML = iconVache;
};

function playPunch() {
  currentTrack = soundPunch;
  currentElement = punch;
  initialIcon = iconPunch;
  togglePlay();
  console.log("Je suis One Punch Man");
}

const endPunch = soundPunch.onended = function() {
  punch.innerHTML = iconPunch;
};

function playWillem() {
  currentTrack = soundWillem;
  currentElement = willem;
  initialIcon = iconWillem;
  togglePlay();
  console.log("Je suis Willem");
}

const endWillem = soundWillem.onended = function() {
  willem.innerHTML = iconWillem;
};

// Third Column

function playIndy() {
  currentTrack = soundIJones;
  currentElement = indy;
  initialIcon = iconIndy;
  togglePlay();
  console.log("Je suis un aventurier");
}

const endIndy = soundIJones.onended = function() {
  indy.innerHTML = iconIndy;
};

function playFBoyard() {
  currentTrack = soundFBoyard;
  currentElement = fboyard;
  initialIcon = iconFBoyard;
  togglePlay();
  console.log("Je suis un Boyard");
}

const endFBoyard = soundFBoyard.onended = function() {
  fboyard.innerHTML = iconFBoyard;
};

function playManger() {
  currentTrack = soundManger;
  currentElement = manger;
  initialIcon = iconManger;
  togglePlay();
  console.log("Je suis un affamé");
}

const endManger = soundManger.onended = function() {
  manger.innerHTML = iconManger;
};

function playSWars() {
  currentTrack = soundSWars;
  currentElement = starwars;
  initialIcon = iconSWars;
  togglePlay();
  console.log("Je suis un Sith ou un Jedi mais pas Jar Jar Bin");
}

const endStar = soundSWars.onended = function() {
  starwars.innerHTML = iconSWars;
};

function togglePlay() {
  if (currentTrack.paused) {
    currentTrack.play();
    currentElement.innerHTML = iconPause;
  } else {
    currentTrack.pause();
    // Reset the timer 
    // currentTrack.currentTime = 0;
    currentElement.innerHTML = initialIcon;
  }

}



// function durationTrack(){
//   var duration = currentTrack.duration;    // Durée totale
//   var time     = currentTrack.currentTime; // Temps écoulé
//   var fraction = time / duration;
//   var percent  = Math.ceil(fraction * 100);
  
//   if(percent == 100){
//     console.log("Je suis fini");
//   }
// }


// Flip animation for russian quote

(function() {
  const englishQuote = ' The circus is gone, but the clowns remain ';
  const frenchQuote = ' Le cirque est parti, mais les clowns restent ';
  var word = [frenchQuote, englishQuote];
  var element = document.getElementById("quoteClown");
  var wordIndex = 1;

  var resetAnimation = function() {
    element.classList.remove('flip');
  }

  setInterval(function(){
      switch (wordIndex) {
        case 0:
          element.classList.add('flip');
          element.textContent = word[wordIndex];
          wordIndex = 1;
          setTimeout(resetAnimation, 2000);
        break;

        case 1:
          element.classList.add('flip');
          element.textContent = word[wordIndex];
          wordIndex = 0;
          setTimeout(resetAnimation, 2000);
        break;
      }
  },4000)
}());