const site1El = document.querySelector('.site1');
const site2El = document.querySelector('.site2');
const site3El = document.querySelector('.site3');


/*
 -Sets the first element of the .site1 class, h4, to "Site 1"
 -When setting the textContent, be specific about which element
 you're choosing. If there are descendents, all the descendents'
 values will be set as well.

 // Get the text content
console.log(element.textContent);

// Set the text content
element.textContent = "New text content";
*/

site1El.children[0].textContent = 'Site 1';
// sets the 2nd element of the .site1 class, anchor element href, to a website
site1El.children[1].setAttribute('href', 'https://google.com');
// sets the 3rd element of the .site1 class, img, to an image
site1El.children[1].children[0].setAttribute(
  'src',
  'assets/images/image_1.jpg'
);

// sets 2nd child's (href) 1st child (alt text) 
site1El.children[1].children[0].setAttribute('alt', 'man working');
// appears to be padding the 2nd child's (href) 1st child (alt text) 
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
const h4instance = document.querySelectorAll('h4');
for(let i = 0; i < h4instance.length; i++) {
    // add styling to h4 here
    h4instance[i].setAttribute('style', 
      `color: blue; font-size: 30px; padding-left: 10px; margin: 0`);
 
}