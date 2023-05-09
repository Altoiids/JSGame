var highScore = localStorage.getItem("highScore") || 0;

Life = 3;
cross = true;
scoreval = 0;
audio = new Audio("public/assets/music.mp3");
audioend = new Audio("public/assets/gameover.mp3");
audiodrop = new Audio("public/assets/freefall.mp3");
gift = document.querySelector(".star");
gameover = document.querySelector(".gameover");
box1 = document.querySelector(".lighthouseimg");
box2 = document.querySelector(".darkhouseimg");
score = document.querySelector(".score");
santa = document.querySelector(".santaimg");
divabove = document.querySelector(".divabove");
anisanta = parseFloat(window.getComputedStyle(santa, null).getPropertyValue('animation-duration'));
anigift = parseFloat(window.getComputedStyle(divabove, null).getPropertyValue('animation-duration'));
var rect = gift.getBoundingClientRect();
var rect1 = box1.getBoundingClientRect();
var rect2 = box2.getBoundingClientRect();
var rect3 = divabove.getBoundingClientRect();
Lives = document.querySelector(".Lives");

setTimeout(() => {
  audio.play();
}, 1000);

document.addEventListener("keydown", (event) => {
  if (event.code == "Space") {
    gift.classList.add("stars");
    audiodrop.play();

    setTimeout(() => {
      audiodrop.pause();
    }, 1000);

    setTimeout(() => {
      gift = document.querySelector(".stars");
      gift.classList.remove("stars");
    }, 400);
  }

  

  if (event.code == "Space" &&
  gift.offsetLeft <= box2.offsetLeft &&
  gift.offsetLeft <= box2.offsetLeft + rect2.width &&
  rect.top <= rect2.top &&
  rect.top <= rect2.top + rect2.height &&
  gift.offsetLeft >= rect1.left &&
  gift.offsetLeft <= rect1.left + box1.clientWidth / 2 &&
  rect.top <= rect1.top &&
  rect.top <= rect1.top + box1.clientHeight
  ) {
    Life -= 1;
    
    Lives.innerHTML = "Lives : " + Life;
    if (Life == 0) {
     gameOver(); 
    }
  }
});

document.addEventListener("keydown", (event) => {
  
  if (event.code == "KeyM") {
    audio.pause();
  }
});

setInterval(() => {
  gift = document.querySelector(".star");
  gameover = document.querySelector(".gameover");
  box1 = document.querySelector(".lighthouseimg");
  box2 = document.querySelector(".darkhouseimg");
  score = document.querySelector(".score");
  santa = document.querySelector(".santaimg");
  divabove = document.querySelector(".divabove");
  anisanta = parseFloat(window.getComputedStyle(santa, null).getPropertyValue('animation-duration'));
anigift = parseFloat(window.getComputedStyle(divabove, null).getPropertyValue('animation-duration'));

  var rect = gift.getBoundingClientRect();
  var rect1 = box1.getBoundingClientRect();
  var rect2 = box2.getBoundingClientRect();

  if (
    rect.left >= rect1.left &&
    rect.left <= rect1.left + box1.clientWidth / 2 &&
    rect.top >= rect1.top &&
    rect.top <= rect1.top + box1.clientHeight
  ) {
    gameOver();

    
  }

  if (
    rect.left >= rect2.left &&
    rect.left <= rect2.left + rect2.width &&
    rect.top >= rect2.top &&
    rect.top <= rect2.top + rect2.height &&
    cross
  ) {
    scoreval += 1;

    updateScore(scoreval);
    cross = false;
    setTimeout(() => {
      cross = true;
    }, 1000);
  }


  if (scoreval >= 1 && scoreval < 5 && santa.style.animationDuration < "4s" ) {

    setTimeout(() => {
      
      
      newanisanta = anisanta - 0.0000001;
      newanigift = anigift - 0.0000001;
      santa.style.animationDuration = newanisanta + 's';
      divabove.style.animationDuration = newanigift + 's';
     
  }, 5);
  } 
  
  else if (scoreval >= 5 && scoreval < 10 &&  santa.style.animationDuration < "3.5s") {
 
    setTimeout(() => {
      newanisanta = anisanta - 0.0000001;
      newanigift = anigift - 0.0000001;
      santa.style.animationDuration = newanisanta + 's';
      divabove.style.animationDuration = newanigift + 's';
      
  }, 5);

    
  } else if (scoreval >= 10 && scoreval < 15 && santa.style.animationDuration < "3s" ) {
   
    setTimeout(() => {
      
      newanisanta = anisanta - 0.0000001;
      newanigift = anigift - 0.0000001;
      santa.style.animationDuration = newanisanta + 's';
      divabove.style.animationDuration = newanigift + 's';
     
  }, 5);


  } else if (scoreval >= 15 && scoreval < 20 && santa.style.animationDuration < "2.5s" ) {
    
    setTimeout(() => {
      
      newanisanta = anisanta - 0.0000001;
      newanigift = anigift - 0.0000001;
      santa.style.animationDuration = newanisanta + 's';
      divabove.style.animationDuration = newanigift + 's';
      
  }, 5);

  } else if (scoreval >= 20 && scoreval < 25 && santa.style.animationDuration < "2s" ) {

    setTimeout(() => {
    
      newanisanta = anisanta - 0.0000001;
      newanigift = anigift - 0.0000001;
      santa.style.animationDuration = newanisanta + 's';
      divabove.style.animationDuration = newanigift + 's';
      
  }, 5);


  } 
  

  checkHighScore();
}, 10);

function updateScore(scoreval) {
  santa = document.querySelector(".santaimg");
  var rect3 = santa.getBoundingClientRect();
  score.innerHTML = "Score: " + scoreval;

  
}
function updatehighScore(highScore) {
  highscore.innerHTML = "Highest Score: " + highScore;
}
function checkHighScore() {
  if (scoreval > highScore) {
    highScore = scoreval;
    localStorage.setItem("highScore", highScore);
  }
  document.getElementById("highScore").innerHTML = "Highscore: " + highScore;
}
 
function gameOver(){
  gameover.innerHTML =
        "Game Over - You Will be Shortly Redirected to Home Page";
      box1.classList.remove("lighthouseani");
      box2.classList.remove("darkhouseani");
      divabove.classList.remove("santaani");
      santa.classList.remove("santaani");
      santa.style.display = "none";
      box1.style.display = "none";
      box2.style.display = "none";
    audioend.play();
    setTimeout(() => {
      audioend.pause();
      audio.pause();
    }, 1000);

    setTimeout(() => {
      location.href = "index.html";
    }, 4000);
}