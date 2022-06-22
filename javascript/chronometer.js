class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    this.speed = 1000
    this.miliSpeed = this.speed / 1000
  }

  start(callback) {
    this.intervalId = setInterval(()=>{
      this.currentTime ++
      callback && callback()
    },this.speed)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return this.currentTime % 60
  }

  getMilliseconds() {
    return this.currentTime * 1000
  }

  computeTwoDigitNumber(value) {
    return value < 10 ? `0${value}` : `${value}`
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }

  split2(){
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}:${this.computeTwoDigitNumber(this.getMiliseconds())}`
    
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
