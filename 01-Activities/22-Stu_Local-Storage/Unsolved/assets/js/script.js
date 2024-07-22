const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const signUpButton = document.querySelector('#sign-up');
const msgDiv = document.querySelector('#msg');
const userEmailSpan = document.querySelector('#user-email');
const userPasswordSpan = document.querySelector('#user-password');



function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute('class', type);
}

function renderLastRegistered() {
  // TODO: Retrieve the last email and password and render it to the page
  const lastEmail = localStorage.getItem('email');
  const lastPass = localStorage.getItem('password');

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

    // TODO: Save email and password to localStorage and render the last registered user
     localStorage.setItem('email', email);
     localStorage.setItem('password', password);
    
    renderLastRegistered();
    
    
  
  }
});
