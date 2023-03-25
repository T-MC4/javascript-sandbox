const div = document.createElement('div');
div.className = 'child';
div.id = 'child';
div.setAttribute('title', 'My Element');

const text = document.createTextNode('Hello World');

div.appendChild(text);

document.body.appendChild(div);

const ul = document.querySelector('ul');

ul.appendChild(div);


console.log(ul);