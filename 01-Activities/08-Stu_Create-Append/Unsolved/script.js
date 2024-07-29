/* entire page body is built with Javascript */

const body = document.body;
const h1El = document.createElement('h1');
const infoEl = document.createElement('div');
const imgEl = document.createElement('img');
const kittenEl = document.createElement('div');
const nameEl = document.createElement('div');
const favoriteEl = document.createElement('div');
// Create ordered list element
const listEl = document.createElement('ol');
// Create ordered list items
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const li4 = document.createElement('li');

h1El.textContent = 'Welcome to my page';
h1El.setAttribute('style', 'margin:auto; width:50%; text-align:center;');

kittenEl.textContent = 'This is my kitten 🐱.';
kittenEl.setAttribute('style', 'font-size:25px; text-align:center;');

nameEl.textContent = 'His name is Jax.';
nameEl.setAttribute('style', 'font-size:25px; text-align:center;');

favoriteEl.textContent = 'My favorite foods are:';
favoriteEl.setAttribute('style', 'font-size:20px;');

// you can append items before setting their style/content
body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
// Append ordered list
favoriteEl.appendChild(listEl);

// set style/content of appended elements
infoEl.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
imgEl.setAttribute('src', 'http://placekitten.com/200/300');




// TODO: Add ordered list items containing four favorite foods
li1.textContent = 'lasagna';
li2.textContent = 'fish';
li3.textContent = 'almost all vegetables'
li4.textContent = 'caribbean food'

// append the list items to the ordered list element
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);

listEl.setAttribute('style', 'background-color: #333333; padding: 20px;');
li1.setAttribute('style', 'background-color: black; color: white; padding: 5px; margin-left: 35px;');
li2.setAttribute('style', 'background-color: navy; color: white; padding: 5px; margin-left: 35px;');
li3.setAttribute('style', 'background-color: teal; color: white; padding: 5px; margin-left: 35px;');
li4.setAttribute('style', 'background-color: aqua; color: white; padding: 5px; margin-left: 35px;');