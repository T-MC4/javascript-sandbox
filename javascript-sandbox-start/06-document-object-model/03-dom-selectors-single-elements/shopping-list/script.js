const list = document.querySelector('ul');
console.log(list);

const listItem = list.querySelector('li');
console.log(listItem);

console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').getAttribute('id'));

// Set attributes
document.getElementById('app-title').id = 'new-title';

console.log(document.querySelector('li'));

const title = document.querySelector('h1');
console.log(title);

console.log(title.textContent);
title.textContent = 'Hello World';

title.style.color = 'red';
title.style.backgroundColor = 'black';
title.style.padding = '10px';
title.style.borderRadius = '5px';



console.log(title.innerHTML);
title.innerHTML = '<strong><em>Hi</em> World</strong>';

console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.app-title'));
console.log(document.querySelector('h1'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('input[type="text"]'));


console.log(document.querySelector('li:nth-child(2)').innerText);

const secondListItem = document.querySelector('li:nth-child(2)')

secondListItem.innerText = 'Hello World';
secondListItem.style.color = 'red';





