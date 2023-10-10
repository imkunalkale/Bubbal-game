var timer = 60;

function getNewHit(){
 var rn = Math.floor(Math.random()*10);
 document.querySelector("#hitval").textContent = rn;
}

function Makebubble() {
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
    }
  }, 1000);
}

getNewHit();
Makebubble();
runTimer();
