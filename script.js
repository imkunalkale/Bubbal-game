var timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore(){
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}


function getNewHit(){
 hitrn = Math.floor(Math.random()*10);
 document.querySelector("#hitval").textContent = hitrn;
}

function makebubble() {
  var clutter = "";
  for (i = 1; i <= 85; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
  var timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timerint);
      document.querySelector("#pbtm").innerHTML = `<h1>GAME-OVER</>`;
    }
  }, 1000);
}

document.querySelector("#pbtm")
.addEventListener("click", function(dets){
var clickednum = Number(dets.target.textContent);
if(clickednum === hitrn)
increaseScore();
makebubble();
getNewHit();
});


// call functions 
getNewHit();
makebubble();
runTimer();
