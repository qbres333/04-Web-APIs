// TODO: Which element is the following line of code selecting?
// the image box div (carousel)
const carousel = document.querySelector('.carouselbox');
// TODO: Which element is the following line of code selecting?
//the arrow buttons
const next = carousel.querySelector('.next');
const prev = carousel.querySelector('.prev');
let index = 0;
let currentImage;

const images = [
  'https://picsum.photos/id/10/300/200',
  'https://picsum.photos/id/20/300/201',
  'https://picsum.photos/id/30/300/202',
  'https://picsum.photos/id/47/300/203',
];

carousel.style.backgroundImage = "url('https://picsum.photos/id/10/300/200')";

/** Navigate carousel in a way that is circular. 
 * You can click next and prev forever. */
function navigate(direction) {
  index = index + direction;
  if (index < 0) {
    index = images.length - 1;
  } else if (index > images.length - 1) {
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = `url('${currentImage}')`;
}

// TODO: Describe the functionality of the following event listener.
//when you click the image, the url changes to the img url
carousel.addEventListener('click', function () {
  window.location.href = images[index];
});

// TODO: Describe the functionality of the following event listener.
//listens for the click of right arrow
next.addEventListener('click', function (event) {
  // TODO: What is the purpose of the following line of code?
  /** if this is removed, clicking the right arrow results in the 
  URL changing, instead of the image changing. */

  event.stopPropagation(); 

  navigate(1);
});

// TODO: Describe the functionality of the following event listener.
// listens for the click of the left arrow
prev.addEventListener('click', function (event) {
  // TODO: What would happen if we didn't add the following line of code?
    /** if this is removed, clicking the right arrow results in the 
  URL changing, instead of the image changing. Meaning the whole 
  webpage changes to the img URL */
  event.stopPropagation();

  navigate(-1);
});

navigate(0);

//Notes on stopPropagation() method
/**stopPropagation() is a method used to prevent the propagation 
 * of an event in the DOM. When an event occurs on an element, 
 * it normally propagates through the DOM tree, from the target 
 * element up to the root element. This is known as event bubbling. 
 * 
 * What stopPropagation() does:

Stops the event from bubbling up the DOM tree.
Prevents any parent elements from receiving the event.

Why use stopPropagation():

To prevent unintended side effects from event handlers on parent 
  elements.
To create specific behavior for a particular element without affecting 
  other elements.
To optimize performance by avoiding unnecessary event handling.
*/
