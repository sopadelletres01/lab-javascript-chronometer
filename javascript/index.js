const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes()
  printSeconds()
  printMilliseconds()
}

function printMinutes() {
  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes())
  console.log(minutes)
  minDecElement.innerText = minutes[0]
  minUniElement.innerText = minutes[1]
}

function printSeconds() {
  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds())
  secDecElement.innerText = seconds[0]
  secUniElement.innerText = seconds[1]
}

// ==> BONUS
function printMilliseconds() {
  let milliseconds = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds())
  console.log(milliseconds)
  milDecElement.innerText = milliseconds[0]
  milUniElement.innerText = milliseconds[1]
}

function printSplit() {
  let li = document.createElement("li")
  li.innerHTML = chronometer.split()
  splitsElement.appendChild(li)
}

function clearSplits() {
  
}

function setLeftBtn() {
  btnLeftElement.classList.toggle("start")
  btnLeftElement.classList.toggle("stop")
  btnLeftElement.innerHTML = btnLeftElement.classList.contains("stop") ? "STOP" : "START"
}

function setRightBtn() {
  btnRightElement.classList.toggle("split")
  btnRightElement.classList.toggle("reset")
  btnRightElement.innerHTML = btnRightElement.classList.contains("split") ? "SPLIT" : "RESET"

}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  setRightBtn()
  setLeftBtn()
  if(btnLeftElement.classList.contains("stop")) {
    chronometer.start(()=>{
      printTime()
    })
  }
  if(btnLeftElement.classList.contains("start")) chronometer.stop()
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if(btnRightElement.classList.contains("reset")) {
    chronometer.reset()
    minDecElement.innerHTML = "0"
    minUniElement.innerHTML = "0"
    secUniElement.innerHTML = "0"
    secDecElement.innerHTML = "0"
    splitsElement.innerHTML = ""
  }
  if(btnRightElement.classList.contains("split")) printSplit()
});
