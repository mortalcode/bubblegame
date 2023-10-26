let timer = 30;
let score = 0;
let hitRN = 0;

function increaseScore() {
  score += 10;
  document.querySelector("#scorevalue").textContent = score;
}

function getNewHit() {
  hitRN = Math.floor(Math.random() * 10);
  document.querySelector("#hitvalue").textContent = hitRN;
}

function makeBubble() {
  let clutter = "";

  for (let i = 1; i < 131; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector(".bottom-con").innerHTML = clutter;
}

function runTimer() {
  let timerend = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timerend);
      document.querySelector(".bottom-con").innerHTML = `<h1>GAME OVER!</h1>`;
    }
  }, 1000);
}

document
  .querySelector(".bottom-con")
  .addEventListener("click", function (dets) {
    let clickednumber = Number(dets.target.textContent);
    if (clickednumber === hitRN) {
      increaseScore();
      makeBubble();
      getNewHit();
    }
  });

runTimer();
makeBubble();
getNewHit();
