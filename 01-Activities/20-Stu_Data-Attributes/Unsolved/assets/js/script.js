const container = document.querySelector('.container');

container.addEventListener('click', function (event) {
  const element = event.target;
  console.log(element.textContent);
  // TODO: Complete function
  // Check if the clicked element is a box i.e. match by class on .box
  if (element.matches('.box')) {
    //print to see
    console.log('element', element);
    // Get the current value of the image's data-state attribute
    const state = element.getAttribute('data-state'); // my code here
    const imgValue = element.getAttribute('data-state'); // my code here
    
    
    // console.log(imgValue); // my code here
    console.log(element.dataset.number); // an alternative to creating a const and using getAttribute

    if (state === 'hidden') {
      //see the state
      const state = element.getAttribute('data-state');
      console.log('state', state);
      // Change the data-state attribute's value
      // There are two different ways this attribute can be set
        // element.dataset.state = 'visible';
        const dataNumber = element.getAttribute('data-number');
        //reveal number by storing in textContent attribute
        element.textContent = dataNumber;

      // Update the box to show the number
      element.setAttribute('data-state', 'visible');
    } else {
      // Change the attributes back to hidden
      element.setAttribute('data-state', 'hidden');

      // change textContent back to empty string
      element.textContent = '';
    }
  }
});
