const typefaceEl = document.querySelector('#typeface');
const clearEl = document.querySelector('#clear');
const h1El = document.querySelector('#h1');
const h2El = document.querySelector('#h2');
const h3El = document.querySelector('#h3');
const pEl = document.querySelector('#p');
const textAreaEl = document.querySelector('#textarea');

/* Why did we create an elements array? */
const elements = [h1El, h2El, h3El, pEl];

/* why must this variable be initialized this way? This
initializes the variable with a value of "undefined".

There are a few reasons to declare a variable without an 
initial value:

Delayed assignment: You might not know the value at declaration 
  time but will assign it later based on user input, calculations, 
  or other factors.
Temporary storage: You might use the variable as a temporary 
  container for a value that will be calculated or modified 
  within a function.
Function arguments: Function parameters are essentially 
  variables declared without initial values, as their values 
  are provided when the function is called.*/
let typeface;

// Change event
typefaceEl.addEventListener('change', function (event) {
  event.preventDefault();
  // here we set the value of typeface
  typeface = typefaceEl.value;
  document.querySelector('.container').style.fontFamily = typeface;
});

// Keydown event
textAreaEl.addEventListener('keydown', function (event) {
  // Access value of pressed key with key property
  const key = event.key.toLowerCase();
  const alphabetNumericCharacters =
    'abcdefghijklmnopqrstuvwxyz0123456789 '.split('');
  if (alphabetNumericCharacters.includes(key)) {
    for (let i = 0; i < elements.length; i++) {
      elements[i].textContent += event.key;
    }
  }
});

clearEl.addEventListener('click', function (event) {
  event.preventDefault();
  textAreaEl.value = '';

  for (let i = 0; i < elements.length; i++) {
    elements[i].textContent = '';
  }
});
