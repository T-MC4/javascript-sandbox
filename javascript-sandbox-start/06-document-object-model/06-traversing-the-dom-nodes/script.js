// We will typcially traverse by Element nodes, as opposed to working through all nodes (including text nodes, comments, etc.)


let output;

const parent = document.querySelector('.parent');

output = parent.childNodes;
output = parent.childNodes[5].style.color = 'red';
output = parent.childNodes[3].innerText = 'Hello World';

console.log(parent.outerHTML);
console.log(parent.childNodes);

