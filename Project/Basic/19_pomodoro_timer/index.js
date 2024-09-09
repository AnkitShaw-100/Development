const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");

// Initialize time from the HTML data-time attribute
let timeLeft = parseTime(timerEl.getAttribute("data-time"));
let interval;

function parseTime(timeString) {
  const [minutes, seconds] = timeString.split(':').map(Number);
  return minutes * 60 + seconds;
}

function formatTime(seconds) {
  let minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function updateTimer() {
  timerEl.innerHTML = formatTime(timeLeft);
}

function startTimer() {
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft <= 0) {
      clearInterval(interval);
      alert("Time's up!");
      timeLeft = parseTime(timerEl.getAttribute("data-time")); // Reset to initial time
      updateTimer();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
}

function resetTimer() {
  clearInterval(interval);
  timeLeft = parseTime(timerEl.getAttribute("data-time")); // Reset to initial time
  updateTimer();
}

startEl.addEventListener("click", startTimer);
stopEl.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTimer);

// Initialize display
updateTimer();
