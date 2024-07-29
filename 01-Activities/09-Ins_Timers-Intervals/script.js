// Selects element by class
const timeEl = document.querySelector('.time');

// Selects element by id
const mainEl = document.getElementById('main');

let secondsLeft = 10;

function setTime() {
  // Sets interval in a variable
  /* setInterval() is a JavaScript function that repeatedly 
  calls a specified function or executes a code snippet, 
  with a fixed time delay between each call.
  syntax: setInterval(function, milliseconds, arg1, arg2, ...);
  arg1, arg2... are optional arguments to pass to the function*/
  const timerInterval = setInterval(function () {
    // this is the countdown; secondsLeft is decrementing
    secondsLeft--;
    timeEl.textContent = secondsLeft + ' seconds left till colorsplosion.';

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      /* The setInterval() function returns an interval ID (the 
      const timerInterval), which can be used to stop the interval 
      using clearInterval() */
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }
  }, 1000);
}

// Function to create and append colorsplosion image
function sendMessage() {
  // sets h1 element text to blank
  timeEl.textContent = ' ';
  // create img element
  const imgEl = document.createElement('img');
  // set img element to a specific picture
  imgEl.setAttribute('src', 'images/image_1.jpg');
  // append the image to the div element
  mainEl.appendChild(imgEl);
}

setTime();
/* Function declarations are hoisted, meaning they can be used 
before they are defined in the code.
Calling a function is necessary to execute its code.
The order of function calls can impact the program's behavior. */
