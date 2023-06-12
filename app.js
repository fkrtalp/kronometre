const play = document.querySelector(".btn1");
const reset = document.querySelector(".btn2");
const btn = document.querySelector(".btn");
const audio = document.querySelector(".audio");
const clock = document.querySelector("p"); // clock

let mSeconds = 0;
let seconds = 0;
let minutes = 0;
let run = false;
let timer;

function startTimer() {
  mSeconds++;
  if (mSeconds === 100) {
    mSeconds = 0;
    seconds++;
  }
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  minutes = String(minutes).length === 1 ? `0${minutes}` : minutes;
  seconds = String(seconds).length === 1 ? `0${seconds}` : seconds;
  mSeconds = String(mSeconds).length === 1 ? `0${mSeconds}` : mSeconds;

  clock.textContent = `${minutes}:${seconds}:${mSeconds}`;
}

play.addEventListener("click", () => {
  run = !run;

  if (run) {
    audio.play();
    timer = setInterval(startTimer, 10);
    play.innerHTML = `
    <i class="fa-solid fa-circle-pause"></i>`;
  } else {
    audio.pause();
    clearInterval(timer);
    play.innerHTML = `
    <i class="fa-solid fa-circle-play"></i>`;
  }
});

reset.addEventListener("click", () => {
  audio.pause();
  clearInterval(timer);
  mSeconds = 0;
  seconds = 0;
  minutes = 0;
  run = false;
  clock.textContent = "00:00:00";
  play.innerHTML = `<i class="fa-solid fa-circle-play"></i>`;
});

play.onmouseover = function () {
  play.style.color = "red";
  play.style.cursor = "pointer";
  play.style.transform = "scale(1.4, 1.4)";
  play.style.marginRight = "3rem";
};

play.onmouseout = function () {
  play.style.color = "black";
  play.style.transform = "scale(1,1)";
  play.style.marginRight = "1rem";
};
reset.onmouseover = function () {
  reset.style.color = "red";
  reset.style.cursor = "pointer";
  reset.style.transform = "scale(1.4, 1.4)";
  reset.style.marginLeft = "3rem";
};

reset.onmouseout = function () {
  reset.style.color = "black";
  reset.style.transform = "scale(1,1)";
  reset.style.marginLeft = "0";
};
