class Clock {

  constructor() {
  
    const currentTime = new Date();
    
    this.hours = currentTime.getHours();
    this.minutes = currentTime.getMinutes();
    this.seconds = currentTime.getSeconds();

    this.printTime();

    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {

    const timeString = [this.hours, this.minutes, this.seconds].join(":");

    console.log(timeString);
  }

  _tick() {
    this._incrementSeconds();
    this.printTime();
  }

}

const clock = new Clock();
