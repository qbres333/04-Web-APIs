console.log('Document Body: ');
console.log(document.body);

console.log('Children of Document Body: ');
console.log(document.body.children);

console.log('First child of body: ');
console.log(document.body.children[0]);

console.log('First child of the ul: ');
console.log(document.body.children[1].children[0]);

// Accessing element by id
const firstChildUl = document.getElementById('first-child-ul');
console.log(firstChildUl);

const secChildUl = document.getElementById('second-child-ul');
const thirdChildUl = document.getElementById('third-child-ul')

// Setting style of element
firstChildUl.style.color = 'orange';
secChildUl.style.color = 'violet';
thirdChildUl.style.color = 'gold';

