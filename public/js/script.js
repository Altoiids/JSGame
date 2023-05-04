
var highScore = localStorage.getItem("highScore") || 0;

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


      setTimeout(() => {
        audio.play();
      }, 1000);

      document.addEventListener("keydown", (event) => {
        console.log(event.code);
        if (event.code == "Space") {
          gift = document.querySelector(".star");
          divabove = document.querySelector(".divabove");

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
      });

      document.addEventListener("keydown", (event) => {
        console.log(event.code);
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
        
        var rect = gift.getBoundingClientRect();
        var rect1 = box1.getBoundingClientRect();
        var rect2 = box2.getBoundingClientRect();
        
  


        if (
          rect.left >= rect1.left &&
          rect.left <= rect1.left + box1.clientWidth/2  &&
          rect.top >= rect1.top &&
          rect.top <= rect1.top + box1.clientHeight
        ) {
          
          
          

          gameover.innerHTML =
            "Game Over - You Will be Shortly Redirected to Home Page";
          box1.classList.remove("lighthouseani");
          box2.classList.remove("darkhouseani");
          divabove.classList.remove("santaani");
          santa.classList.remove("santaani");

          audioend.play();
          setTimeout(() => {
            audioend.pause();
            audio.pause();
          }, 1000);

          setTimeout(() => {
            location.href = "index.html";
          }, 4000);
        }
        
        if (
          rect.left >= rect2.left &&
          rect.left <= rect2.left + rect2.width &&
          rect.top >= rect2.top &&
          rect.top <= rect2.top + rect2.height 
          && cross
        ) {
          scoreval += 1;
          
          updateScore(scoreval);
          cross = false;
          setTimeout(() => {
            cross = true;
          }, 1000);
        }

        
        checkHighScore();
        
      }
      , 10);

      function updateScore(scoreval) {
        santa = document.querySelector(".santaimg");
        var rect3 = santa.getBoundingClientRect();
        score.innerHTML = "Score: " + scoreval;
        

        if (scoreval >= 1 && scoreval < 5  ) {

          console.log("condition one called");
          divabove.style.animationDuration = "4.5s";
          santa.style.animationDuration = "4.5s";
          console.log(santa.style.animationDuration)
        } else if (scoreval >= 5 && scoreval < 10) {
          divabove.style.animationDuration = "4s";
          santa.style.animationDuration = "4s";
        } else if (scoreval >= 10 && scoreval < 15) {
          divabove.style.animationDuration = "3.5s";
          santa.style.animationDuration = "3.5s";
        } else if (scoreval >= 15 && scoreval < 20) {
          divabove.style.animationDuration = "3.1s";
          santa.style.animationDuration = "3.1s";
        } else if (scoreval >= 20 && scoreval < 25) {
          divabove.style.animationDuration = "2.9s";
          santa.style.animationDuration = "2.9s";
        } else {
          
          divabove.style.animationDuration = "2.5s";
          santa.style.animationDuration = "2.5s";
          console.log(divabove.style.animationDuration);
        }
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