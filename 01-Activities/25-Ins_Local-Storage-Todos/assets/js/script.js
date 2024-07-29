const student = document.getElementById('student-names');
const grade = document.getElementById('grades');
const comment = document.getElementById('msg');
const saveButton = document.getElementById('save');

function saveLastGrade() {
  // Save related form data as an object
  const studentGrade = {
    student: student.value,
    grade: grade.value,
    comment: comment.value.trim(),
  };
  /** Use .setItem() to store object in storage and JSON.stringify 
  to convert it as a string */
  localStorage.setItem('studentGrade', JSON.stringify(studentGrade));
}

function renderLastGrade() {
  // Use JSON.parse() to convert text to JavaScript object
  const lastGrade = JSON.parse(localStorage.getItem('studentGrade'));
  // Check if data is returned, if not exit out of the function
  if (lastGrade !== null) {
    /** we use innerHTML here to replace the blanks on the card.
      But why not use textContent?
      textContent
      Retrieves: Returns the text content of an element and its 
      descendants, without HTML tags.   
      Sets: Replaces the text content of an element with plain text.

      innerHTML
      Retrieves: Returns the HTML content of an element, including 
      any HTML tags.   
      Sets: Replaces the content of an element with new HTML content.   

      Are we using innerHTML because the card elements have id's?
      To maintain element styling?
     */
    document.getElementById('saved-name').innerHTML = lastGrade.student;
    document.getElementById('saved-grade').innerHTML = lastGrade.grade;
    document.getElementById('saved-comment').innerHTML = lastGrade.comment;
  }
}

// store object to local storage and render that object
saveButton.addEventListener('click', function (event) {
  event.preventDefault();
  saveLastGrade();
  renderLastGrade();
});

// The init() function fires when the page is loaded
function init() {
  /** When the init function is executed, the code inside 
  renderLastGrade function will also execute */
  renderLastGrade();
}
init();
