const minutesInput = document.getElementById('minutes');
const startBtn = document.getElementById('start-btn');
const timerDisplay = document.getElementById('timer-display');
const statusFooter = document.getElementById('status');

let countdownInterval;

startBtn.addEventListener('click', () => {
  // Clear any existing interval
  clearInterval(countdownInterval);
  statusFooter.textContent = ""; // Clear previous status

  // Convert input minutes to total seconds
  let totalSeconds = parseInt(minutesInput.value, 10) * 60;

  // Update the display every second
  countdownInterval = setInterval(() => {
    if (totalSeconds <= 0) {
      clearInterval(countdownInterval);
      timerDisplay.textContent = "00:00";
      statusFooter.textContent = "Time's up!";
      return;
    }

    // Calculate minutes and seconds
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    totalSeconds--;
  }, 1000);
});
