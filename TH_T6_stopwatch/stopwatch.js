//tạo đối tượng
let seconds = 0;
let intervalId;

//lấy các nút
const timer = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

//gắn sự kiện cho btn
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

//bắt đầu
function startTimer() {
  intervalId = setInterval(() => {
    seconds++;
    updateTimer();
  }, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
  resetBtn.disabled = false;
}
//dừng lại
function stopTimer() {
  clearInterval(intervalId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
  resetBtn.disabled = false;
}
//đặt lại
function resetTimer() {
  clearInterval(intervalId);
  seconds = 0;
  updateTimer();
  startBtn.disabled = false;
  stopBtn.disabled = true;
  resetBtn.disabled = true;
}


//cập nhật giá trị
function updateTimer() {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds - hours * 3600) / 60);
  const remainingSeconds = seconds % 60;
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  timer.textContent = formattedTime;
}