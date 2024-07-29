const outer = document.querySelector('.outer-div');
const inner = document.querySelector('.inner-div');
const button = document.querySelector('.button');

function changeBlue(event) {
  /** When only this event.stopPropagation() call is invoked, 
   * only the blue button gets colored when you click it,
   * rather than all boxes. WHen you click orange, both 
   * orange and purple get colored. */
  event.stopPropagation();
  event.currentTarget.setAttribute('style', 'background-color: blue');
}


function changeOrange(event) {
  /** When only this event.stopPropagation() call is invoked, 
* the blue and orange sections get colored when you click blue,
* but not the purple section. */
event.stopPropagation();
event.currentTarget.setAttribute(
 'style',
 'background-color: #EE442F; color: white;'
  );
}

function changePurple(event) {
   /** When only this event.stopPropagation() call is invoked, 
   * the orange and purple sections gets colored when you click it,
   * but not blue. When you click blue, everything gets colored. */
  // event.stopPropagation();
  event.currentTarget.setAttribute('style', 'background-color: #601A4A');
}

/** When stopPropagation is invoked for both blue and orange, 
 * each section must be clicked separately to be colored. */
outer.addEventListener('click', changePurple);
inner.addEventListener('click', changeOrange);
button.addEventListener('click', changeBlue);
