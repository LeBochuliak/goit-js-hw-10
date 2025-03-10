import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import iconError from "../img/error.png";


const datetimePicker = document.querySelector("#datetime-picker");
const startButton = document.querySelector("#button-start");
const days = document.querySelector("[data-days]");
const hours = document.querySelector("[data-hours]");
const minutes = document.querySelector("[data-minutes]");
const seconds = document.querySelector("[data-seconds]");

startButton.disabled = true;
  
let userSelectedDate;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
    minuteIncrement: 1,
  onClose(selectedDates) {
      userSelectedDate = selectedDates[0];

      if (userSelectedDate.getTime() <= Date.now()) {
          startButton.disabled = true;
          iziToast.show({
              message: "Please choose a date in the future",
              backgroundColor: "red",
              messageColor: "white",
              position: "topRight",
              transitionIn: "fadeIn",
              iconUrl: iconError
});
      } else {
          startButton.disabled = false;
      }     
  },
};

flatpickr(datetimePicker, options);

startButton.addEventListener("click", () => {
    startButton.disabled = true;
    datetimePicker.disabled = true;
    const intervalId = setInterval(() => {
        const timeLeft = convertMs(userSelectedDate.getTime() - Date.now());
    
        days.textContent = addLeadingZero(timeLeft.days);
        hours.textContent = addLeadingZero(timeLeft.hours);
        minutes.textContent = addLeadingZero(timeLeft.minutes);
        seconds.textContent = addLeadingZero(timeLeft.seconds);

        if (timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
            clearInterval(intervalId);
            datetimePicker.disabled = false;
            alert("Time!");
        }
    }, 1000);
});


function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}


function addLeadingZero(value) {
    return String(value).padStart(2, "0");
} 
 
