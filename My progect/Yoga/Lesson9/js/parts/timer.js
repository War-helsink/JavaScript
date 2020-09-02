class Timer {
    constructor(id, endtime) {
      this.endtime = endtime;
      this.timer = document.getElementById(id);
      this.hours = timer.querySelector(".hours");
      this.minutes = timer.querySelector(".minutes");
      this.seconds = timer.querySelector(".seconds");
      this.timeInterval = setInterval(this.updateClock, 1000, this);
    }
    getTimeRemaining() {
      let t = Date.parse(this.endtime) - Date.parse(new Date()),
        seconds = Math.floor((t / 1000) % 60),
        minutes = Math.floor((t / 1000 / 60) % 60),
        hours = Math.floor(t / (1000 * 60 * 60));

      return {
        total: t,
        seconds: seconds,
        minutes: minutes,
        hours: hours,
      };
    }
    updateClock(obgect) {
      let t = obgect.getTimeRemaining();
      obgect.hours.textContent = t.hours;
      obgect.minutes.textContent = t.minutes;
      obgect.seconds.textContent = t.seconds;
      if (t.total <= 0) {
        clearInterval(obgect.timeInterval);
      }
    }
}
  
module.exports = Timer;