const timerEl = document.getElementById('countdown'); /* no hash
needed here because getElementById is used instead of querySelector */
const mainEl = document.getElementById('main');

const message =
  'Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.';
/* split the message at the spaces. This creates an array of 
substrings!! Words is thus an array. */
const words = message.split(' ');

function countdown() {
  let timeLeft = 5;

  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  const timeInterval = setInterval(function () {
    //
    // YOUR CODE HERE
    timeLeft--;
    timerEl.textContent = timeLeft;
    if(timeLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timeInterval);
      // call function to display individual words
      displayMessage();
    }
    
  },1000);
}

// Displays the message one word at a time
function displayMessage() {
  let wordCount = 0;

  /* Uses the `setInterval()` method to call a function to be 
  executed every 1000 milliseconds */
  const msgInterval = setInterval(function () {
    // If there are no more words left in the message
    /* How do we know that there are no words left? Because words
    is an array, words[wordCount] will be undefined after the last
    word appears on the screen. The index will not exist. */

    /* Why do we stop the interval first here, instead of displaying
    the words first? */
    if (words[wordCount] === undefined) {
      // Use `clearInterval()` to stop the timer
      clearInterval(msgInterval);
    } else {
      // Display one word of the message
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 1000);
}

countdown();
