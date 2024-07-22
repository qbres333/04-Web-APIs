const site1El = document.querySelector('.site1');
const site2El = document.querySelector('.site2');
const site3El = document.querySelector('.site3');

site1El.children[0].textContent = 'Site 1';
site1El.children[1].setAttribute('href', 'https://google.com');
site1El.children[1].children[0].setAttribute(
  'src',
  'assets/images/image_1.jpg'
);
site1El.children[1].children[0].setAttribute('alt', 'man working');
site1El.children[1].children[0].setAttribute('style', 'padding:10px;');

site2El.children[0].textContent = 'Site 2';
site2El.children[1].setAttribute('href', 'https://twitter.com');
site2El.children[1].children[0].setAttribute(
  'src',
  'assets/images/image_2.jpg'
);
site2El.children[1].children[0].setAttribute('alt', 'group brainstorm');
site2El.children[1].children[0].setAttribute('style', 'padding:10px;');

site3El.children[0].textContent = 'Site 3';
site3El.children[1].setAttribute('href', 'https://instagram.com');
site3El.children[1].children[0].setAttribute(
  'src',
  'assets/images/image_3.jpg'
);
site3El.children[1].children[0].setAttribute('alt', 'women working');
site3El.children[1].children[0].setAttribute('style', 'padding:10px;');

// Write Your Code Below
const h4instance = document.querySelector('h4');
for(let i = 0; i < h4instance.length; i++) {
    // add styling to h4 here
    h4instance[i].setAttribute('style', `color: blue; font-size: 30px; padding-left: 10px; margin: 0`);
 
}