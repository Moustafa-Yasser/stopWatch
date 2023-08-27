let timer = document.getElementById("timer");
let play = document.getElementById("play");
let rest = document.getElementById("rest");

// times
let second = 0;
let minutes = 0;
let hours = 0;
let second2 = 0;
let minutes2 = 0;
let hours2 = 0;

// stop watch

function stop() {
  second++;
  if (second / 60 === 1) {
    second = 0;
    minutes++;
    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }
  if (second < 10) {
    second2 = `0${second.toString()}`;
  } else {
    second2 = second;
  }
  if (minutes < 10) {
    minutes2 = `0${minutes.toString()}`;
  } else {
    minutes2 = minutes;
  }
  if (hours < 10) {
    hours2 = `0${hours.toString()}`;
  } else {
    hours2 = hours;
  }
  timer.innerText = `${hours2}:${minutes2}:${second2}`;
}
let timerInterval = null;
let timeStatus = "stop";

play.addEventListener("click", function () {
  if (timeStatus === "stop") {
    timerInterval = window.setInterval(stop, 1000);
    play.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    play.classList.add("pause");
    timeStatus = "start";
  } else {
    window.clearInterval(timerInterval);
    play.innerHTML = `<i class="fa-solid fa-play"></i>`;
    play.classList.remove("pause");
    timeStatus = "stop";
  }
});
rest.addEventListener("click", function () {
  window.clearInterval(timerInterval);
  play.innerHTML = `<i class="fa-solid fa-play"></i>`;
  play.classList.remove("pause");
  timeStatus = "stop";
  second = 0;
  minutes = 0;
  hours = 0;
  timer.innerHTML = "00:00:00";
});
