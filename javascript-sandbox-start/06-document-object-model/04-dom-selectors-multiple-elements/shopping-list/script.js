// HTML collections are not arrays, but they look like arrays; therfore, you cannot use high-order array methods on them. You can use the `for` loop to iterate over them - or you can turn them into an array first.

// NodeLists DO behave like arrays, therefore you can use high-order array methods on them. You can also use the `for` loop to iterate over them.

const itemList = document.querySelector('.item');

// const output = itemList.nextElementSibling;

const list = document.querySelectorAll('li');

list[3].innerHTML = `
    Hello World
    <button class="remove-item btn-link text-red">
        <i class="fa-solid fa-xmark"></i>
    </button>`

// const output = list[0].parentElement;


const HTMLCollection = document.querySelector('ul').children;

const listArray = Array.from(HTMLCollection);

for (const items of HTMLCollection) {
    console.log(items);
}

// Turn the HTMLCollection into an array so that we can use high-order array methods on it
listArray.forEach(item => console.log(item));

// Can't use methods like .forEach() on HTMLCollection
// HTMLCollection.forEach(item => console.log(item));


const secondChild = document.querySelector('li:nth-child(2)');

secondChild.style.color = 'green';

secondChild.nextElementSibling.style.color = 'red';
secondChild.previousElementSibling.style.color = 'orange';

const lastChild = document.querySelector('li:last-child');

lastChild.style.color = 'blue';

lastChild.parentElement.style.border = '1px solid black';
lastChild.parentElement.style.borderRadius = '5px';
lastChild.parentElement.style.padding = '10px';


const parent = document.querySelector('.items');

output = parent.children[0].nodeName;
output = parent.children[0].className;
output = parent.children[0].classList;
output = parent.children[0].classList[0];
output = parent.children[0].innerText;
output = parent.children[0].innerHTML;


console.log(output);