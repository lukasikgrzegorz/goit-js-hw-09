import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

btnStart = document.querySelector('[data-start]');
btnStart.setAttribute("disabled", "");

actualDate = new Date();
remaingTime = 0;

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
   
      if (selectedDates[0] < actualDate) {
            window.alert("Please choose a date in the future");
      } else {
            btnStart.removeAttribute("disabled");
            console.log(convertMs(selectedDates[0] - actualDate));
      }

  },
};

const fp = flatpickr("#datetime-picker", options);



