window.addEventListener("load", start);

let lives, points;

const bgSound = document.querySelector("#snd1");
const clickSound = document.querySelector("#snd2");
const badeandSound = document.querySelector("#snd3");
const elektronikSound = document.querySelector("#snd4");
const loseSound = document.querySelector("#snd5");
const winSound = document.querySelector("#snd6");
const muteBtn = document.querySelector("#mute");



function start(){
  console.log("start")
hideAllScreens();
document.querySelector("#start").classList.remove("hide");
document.querySelector("#play_btn").addEventListener("click", startGame)
document.querySelector("#play_btn").addEventListener("click", playClickSound)
document.querySelector("#info_btn").addEventListener("click", info)
document.querySelector("#info_btn").addEventListener("click", playClickSound)

}

function info(){
  console.log("info")
hideAllScreens();
document.querySelector("#info").classList.remove("hide");
document.querySelector("#back_btn").addEventListener("click", start)
document.querySelector("#back_btn").addEventListener("click", playClickSound)
}

function startGame() {
  console.log("start");
  hideAllScreens();
  lives = 3;
  points = 0;
  document.querySelector("#score").textContent = points;
  document.querySelector("#energy").textContent = lives;

  stopAllSound();

  bgSound.currentTime = 0;
  bgSound.play();
  bgSound.addEventListener("ended", loopSound);

  document.querySelector("#mute").classList.remove("hide");
  document.querySelector("#mute_play").classList.add("hide");
  document.querySelector("#mute").addEventListener("click", muteplay);
  document.querySelector("#mute").addEventListener("click", playClickSound);
  document.querySelector("#mute_play").addEventListener("click", muteplay);
  document.querySelector("#mute_play").addEventListener("click", playClickSound);

  let usedDuckPositions = [];
  let usedElectronicPositions = [];

  function getUniqueDuckPosition() {
    let pos;
    do {
      pos = generateRandomNumber(5);
    } while (usedDuckPositions.includes(pos));
    usedDuckPositions.push(pos);
    return pos;
  }

  function getUniqueElectronicPosition() {
    let pos;
    do {
      pos = generateRandomNumber(5);
    } while (usedElectronicPositions.includes(pos));
    usedElectronicPositions.push(pos);
    return pos;
  }

let randomNumberBadeand = getUniqueDuckPosition(5);
let newPosBadeand = "pos" + randomNumberBadeand;
let randomFallBadeand = generateRandomNumber(5); 
document.querySelector("#badeand_container").classList.add(newPosBadeand, "falling", "falling" + randomFallBadeand); 
document.querySelector("#badeand_container").addEventListener("mousedown", clickBadeand);


let randomNumberBadeand1 = getUniqueDuckPosition(5);
let newPosBadeand1 = "pos" + randomNumberBadeand1;
let randomFallBadeand1 = generateRandomNumber(5); 
document.querySelector("#badeand_container1").classList.add(newPosBadeand1, "falling", "falling" + randomFallBadeand1); 
document.querySelector("#badeand_container1").addEventListener("mousedown", clickBadeand);


  let randomNumberBadeand2 = getUniqueDuckPosition(5);
  let newPosBadeand2 = "pos" + randomNumberBadeand2;
  let randomFallBadeand2 = generateRandomNumber(5); 
  document.querySelector("#badeand_container2").classList.add(newPosBadeand2, "falling", "falling" + randomFallBadeand2); 
  document.querySelector("#badeand_container2").addEventListener("mousedown", clickBadeand);



  let randomNumberElektronik = getUniqueElectronicPosition(5);
  let newPosElektronik = "pos" + randomNumberElektronik;
  let randomFallElektronik = generateRandomNumber(5); 
  document.querySelector("#elektronik_container").classList.add(newPosElektronik, "falling", "falling" + randomFallElektronik); 
  document.querySelector("#elektronik_container").addEventListener("mousedown", clickElektronik);

  let randomNumberElektronik1 = getUniqueElectronicPosition(5);
  let newPosElektronik1 = "pos" + randomNumberElektronik1;
  let randomFallElektronik1 = generateRandomNumber(5); 
  document.querySelector("#elektronik_container1").classList.add(newPosElektronik1, "falling", "falling" + randomFallElektronik1); 
  document.querySelector("#elektronik_container1").addEventListener("mousedown", clickElektronik);
  
  let randomNumberElektronik2 = getUniqueElectronicPosition(5);
  let newPosElektronik2 = "pos" + randomNumberElektronik2;
  let randomFallElektronik2 = generateRandomNumber(5); 
  document.querySelector("#elektronik_container2").classList.add(newPosElektronik2, "falling", "falling" + randomFallElektronik2); 
document.querySelector("#elektronik_container2").addEventListener("mousedown", clickElektronik);

  document.querySelector("#time").classList.add("time-goes");
  document.querySelector("#time").addEventListener("animationend", game_over);
}

// BADEAND ANIMATIONER //
function clickBadeand() {
  console.log("clickBadeand");  

  this.removeEventListener("mousedown", clickBadeand);
  
  badeandSound.currentTime = 0;
  badeandSound.play();

  addPoint()
  updateScore()

  this.classList.add("freeze");
  this.firstElementChild.classList.add("fade_rotate");

  this.addEventListener("animationend", restartBadeand);
}


function restartBadeand() {
  console.log("restartBadeand");
  this.classList = "";
  this.firstElementChild.classList = "";
  this.offsetHeight;

  let randomNumber = generateRandomNumber(5);
  let newPos = "pos" + randomNumber;

  this.classList.add(newPos, "falling");
  
  let randomFall = generateRandomNumber(5);
  this.classList.add("falling" + randomFall);

  this.addEventListener("mousedown", clickBadeand);
}

// TILFØJEDE ELEMENTER MED THIS //
const figur1 = document.querySelector("#badeand_container");
const figur2 = document.querySelector("#badeand_container1");
const figur3 = document.querySelector("#badeand_container2");

figur1.addEventListener("click", klikHandler);
figur2.addEventListener("click", klikHandler);
figur3.addEventListener("click", klikHandler);

function klikHandler() {
  console.log("clickBadeand");  

  this.removeEventListener("mousedown", clickBadeand);
  
  badeandSound.currentTime = 0;
  badeandSound.play();

  this.classList.add("freeze");
  this.firstElementChild.classList.add("fade_rotate");
  this.addEventListener("animationend", restartBadeand);
}
// TILFØJEDE ELEMENTER THIS //
// BADEAND ANIMATIONER //

// ELEKTRONIK ANIMATIONER //
function clickElektronik() {
  console.log("clickElektronik");

  this.removeEventListener("mousedown", clickElektronik);

  elektronikSound.currentTime = 0;
  elektronikSound.play();

  losePoint();
  loseLife();
  updateScore();
  updateLives();

  this.classList.add("freeze");
  this.firstElementChild.classList.add("shake");

  // Find the overlay inside the clicked container
  const overlay = this.querySelector(".overlay");
  overlay.classList.remove("hide");
  overlay.classList.add("show-overlay");

  setTimeout(() => {
    overlay.classList.remove("show-overlay");
    overlay.classList.add("hide");
  }, 500);

  this.addEventListener("animationend", restartElektronik);
}


function restartElektronik() {
  console.log("restartElektronik");
this.classList = "";
this.firstElementChild.classList = "";
this.offsetHeight;

let randomNumber = generateRandomNumber(5);
let newPos = "pos" + randomNumber;

this.classList.add(newPos, "falling");

let randomFall = generateRandomNumber(5);
this.classList.add("falling" + randomFall);
this.addEventListener("mousedown", clickElektronik);
}


// TILFØJEDE ELEMENTER MED THIS //
const figur4 = document.querySelector("#elektronik_container");
const figur5 = document.querySelector("#elektronik_container1");
const figur6 = document.querySelector("#elektronik_container2");

figur4.addEventListener("click", klikHandler2);
figur5.addEventListener("click", klikHandler2);
figur6.addEventListener("click", klikHandler2);

function klikHandler2() {
  console.log("clickElektronik"); 

  
this.classList.add("freeze");
this.firstElementChild.classList.add("shake");

//  Stød element //
  this.classList.add("show-overlay");
  setTimeout(() => {
    this.classList.remove("show-overlay");
  }, 500);
this.addEventListener("animationend", restartElektronik);

}
// TILFØJEDE ELEMENTER THIS //
// ELEKTRONIK ANIMATIONER //



// ANDRE FUNKTIONER //
function addPoint() {
  points += 10;
  updateScore();
  if (points >= 100) {
    level_complete();
  }
}

function losePoint() {
  points = points - 5;
}

function loseLife() {
  lives = lives - 1;
  if (lives === 0) {
    game_over();
  }
}

function generateRandomNumber(max) {
  return Math.floor(Math.random() * max) + 1;
}

function updateScore() {
  document.querySelector("#score").textContent = points;
}

function updateLives() {
document.querySelector("#energy").textContent = lives;
}

function hideAllScreens(){
  document.querySelector("#start").classList.add("hide");
  document.querySelector("#info").classList.add("hide");
  document.querySelector("#game_over").classList.add("hide");
  document.querySelector("#level_complete").classList.add("hide");
}


function game_over(){
  console.log("game_over")
hideAllScreens();
stopAllSound();
loseGame();

}

function level_complete(){
  console.log("level_complete")
hideAllScreens();
stopAllSound();
winGame();

}  


function loseGame() {
  console.log("loseGame");
  document.querySelector("#game_over").classList.remove("hide");
document.querySelector("#playagain_btn").addEventListener("click", startGame)
document.querySelector("#playagain_btn").addEventListener("click", playClickSound)

document.querySelector("#time").classList = "";
document.querySelector("#time").offsetHeight;

loseSound.currentTime = 0;
loseSound.play();
}

function winGame() {
  console.log("winGame");
  
document.querySelector("#level_complete").classList.remove("hide");
document.querySelector("#playagain_btn2").addEventListener("click", startGame)
document.querySelector("#playagain_btn2").addEventListener("click", playClickSound)


document.querySelector("#time").classList = "";
document.querySelector("#time").offsetHeight;

winSound.currentTime = 0;
winSound.play();

}



// SOUND //

function stopAllSound() {
  bgSound.pause();
  winSound.pause();
  loseSound.pause();
  clickSound.pause();
  badeandSound.pause();
  elektronikSound.pause();
}

function muteplay() {
  console.log("muteplay");

  if (bgSound.paused) {
    bgSound.play();
    document.querySelector("#mute_play").classList.add("hide");
    document.querySelector("#mute").classList.remove("hide");
  } else {
    bgSound.pause();
    document.querySelector("#mute").classList.add("hide");
    document.querySelector("#mute_play").classList.remove("hide");
  }
}

function loopSound() {
  console.log("loopSound");
  bgSound.play();
}

function playClickSound() {
  clickSound.currentTime = 0; 
  clickSound.play();
}