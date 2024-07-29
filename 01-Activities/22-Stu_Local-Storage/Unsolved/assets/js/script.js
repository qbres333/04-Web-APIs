const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const signUpButton = document.querySelector('#sign-up');
const msgDiv = document.querySelector('#msg');
const userEmailSpan = document.querySelector('#user-email');
const userPasswordSpan = document.querySelector('#user-password');


// display registration message
function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute('class', type);
}

function renderLastRegistered() {
  // TODO: Retrieve the last email and password and render it 
  //to the page
  const lastEmail = localStorage.getItem('email');
  const lastPass = localStorage.getItem('password');

  /** Syntax: localStorage.getItem(key)

  key: A string representing the name of the key to retrieve 
    the value from.

  Returns: The value associated with the given key.
  null if the key does not exist. */

  // textContent renders the text to the webpage
  userEmailSpan.textContent = lastEmail; 
  userPasswordSpan.textContent = lastPass;
}


signUpButton.addEventListener('click', function (event) {
  event.preventDefault();

  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  if (email === '') {
    displayMessage('error', 'Email cannot be blank');
  } else if (password === '') {
    displayMessage('error', 'Password cannot be blank');
  } else {
    displayMessage('success', 'Registered successfully');

    // TODO: Save email and password to localStorage and render 
    //the last registered user
     localStorage.setItem('email', email);
     localStorage.setItem('password', password);

     /** setItem
  Syntax: localStorage.setItem(key, value)

  key: A string representing the name of the key to store the 
    value under.
  value: The value to be stored. This can be any data type, 
    but it will be converted to a string before being stored. */

    
    renderLastRegistered();
      
  }
});

/** You can also save the entered data in a separate 
 * function, then call it inside of the event listener */