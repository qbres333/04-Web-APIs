const firstNameInput = document.querySelector('#first-name');
const lastNameInput = document.querySelector('#last-name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const signUpButton = document.querySelector('#sign-up');

signUpButton.addEventListener('click', function (event) {
  event.preventDefault();

  // TODO: Create user object from submission
  const signUp = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    email: emailInput.value,
    password: passwordInput.value
  };

  // TODO: Set new submission to local storage
  localStorage.setItem('signUp', JSON.stringify(signUp));
  /** setItem
  Syntax: localStorage.setItem(key, value)

  key: A string representing the name of the key to store the 
    value under.
  value: The value to be stored. This can be any data type, 
    but it will be converted to a string before being stored. */

});
