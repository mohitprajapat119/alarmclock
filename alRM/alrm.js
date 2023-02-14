

const currentTime = document.querySelector("h1"),
content = document.querySelector(".content"),
selectMenu = document.querySelectorAll("select"),
setAlarmBtn = document.querySelector("button");
let alarmTime, isAlarmSet,
ringtone = new Audio("C:/Users/91823/Desktop/alRM/audio/ringtone.mp3");
for (let i = 1; i <= 12; i++) {
  let value = i < 10 ? '0' + i : i;
  let option = `<option value="${value}">${value}</option>`;
  selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (let i = 0; i <= 59; i++) {
  let value = i < 10 ? '0' + i : i;
  let option = `<option value="${value}">${value}</option>`;
  selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (let i = 1; i <= 2; i++) {
  let ampm = i == 1 ? "AM" : "PM";
  let option = `<option value="${ampm}">${ampm}</option>`;
  selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}
setInterval(() => {
  let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    ampm = "AM";
  if (h >= 12) {
    h = h - 12;
    ampm = "PM";
  }
  h = h == 0 ? 12 : h;
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  currentTime.innerText = `${h}:${m}:${s} ${ampm}`;

  if (alarmTime === `${h}:${m} ${ampm}`) {
    ringtone.play();
    ringtone.loop = true;
  }
});

function setAlarm() {
  if (isAlarmSet) {
    alarmTime = "";
    ringtone.pause();
    content.classList.remove("disable");
    setAlarmBtn.innerText = "Set Alarm";
    return (isAlarmSet = false);
  }
  let hour = selectMenu[0].value;
  let minute = selectMenu[1].value;
  let ampm = selectMenu[2].value;
  let time = `${hour}:${minute} ${ampm}`;

  if (hour === "hours" || minute === "minutes" || ampm === "AM/PM") {
    return alert("Please select a valid time to set alarm");
  }
  alarmTime = time;
  isAlarmSet = true;
  content.classList.add("disable");
  setAlarmBtn.innerText = "Clear Alarm";
}
setAlarmBtn.addEventListener("click",setAlarm);