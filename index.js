const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  btnStart: document.querySelector('button[data-action="start"]'),
  btnStop: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector("body"),
};

refs.btnStart.addEventListener("click", onBtnStartClick);
refs.btnStop.addEventListener("click", onBtnStopClick);

let intervalId = null;

function onBtnStartClick(evt) {
  intervalId = setInterval(() => {
    refs.body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);

  if (intervalId !== null) {
    // evt.target.disabled = true;
    // refs.btnStop.removeAttribute("disabled");
    evt.target.removeEventListener("click", onBtnStartClick);
    refs.btnStop.addEventListener("click", onBtnStopClick);
    return;
  }
}

function onBtnStopClick(evt) {
  // refs.btnStart.removeAttribute("disabled");
  // evt.target.disabled = true;
  evt.target.removeEventListener("click", onBtnStopClick);
  refs.btnStart.addEventListener("click", onBtnStartClick);
  clearInterval(intervalId);
}

function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
