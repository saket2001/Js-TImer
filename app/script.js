var seconds, minutes, hours, timer;
function getValues() {
  hours = document.getElementById("box1").value;
  minutes = document.getElementById("box2").value;
  seconds = document.getElementById("box3").value;
  if (
    hours > 100||
    minutes > 60 ||
    seconds > 60 ||
    hours < -1 ||
    minutes < -1 ||
    seconds < -1
  ) {
    alert(
      "Invalid values" +
        "\n" +
        "Hours less then 100 minutes and seconds less then 60"
    );
    resetValues();
  }
}
function resetValues() {
  inputbox = document.querySelectorAll("input");
  inputbox.forEach((input) => (input.value = ""));
}
function startTimer() {
  getValues();
  if (timer != 0) timer = setInterval(run, 1000);
}
function run() {
  displayValues();
  if (seconds == 0) {
    seconds = 60;
    minutes = minutes - 1;
  }
  seconds--;
  if (minutes == 0) {
    if (hours > 0) {
      hours--;
      minutes = 60;
    }
  }
  /* this stops timer from going into negative */
  if (seconds < 0 || minutes < 0 || hours < 0) {
    clearInterval(timer);
  }
  if (hours === 0 && minutes === 0 && seconds === 0) {
    clearTimer();
  }
}
function clearTimer() {
  clearInterval(timer);
  hours = "-";
  minutes = "-";
  seconds = "-";
  displayValues();
}
function displayValues(getValues) {
  document.getElementById("circle3").innerHTML = seconds;
  document.getElementById("circle2").innerHTML = minutes;
  document.getElementById("circle1").innerHTML = hours;
}
