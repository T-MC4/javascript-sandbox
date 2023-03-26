// insertAdjacentElement Example
function insertElement() {
  const filter = document.querySelector('.filter');

  const newItem = document.createElement('h1');
  newItem.textContent = 'insertAdjacentElement'

  filter.insertAdjacentElement('afterend', newItem)
}

// insertAdjacentText Example
function insertText() {
  const ul = document.querySelector('ul');
  
  ul.insertAdjacentText('afterbegin', 'insertAdjacentText')
}


// insertAdjacentHTML example

function insertHTML() {
  const li = document.querySelector('li');

  li.insertAdjacentHTML('afterend', '<h2>insertHTML</h2>')
}


// insertBefore Example
function insertBeforeItem() {
  const ul = document.querySelector('ul');

  const li = document.createElement('li');
  li.textContent = 'insertBefore'

  const thirdItem = document.querySelector('li:nth-child(3)');

  ul.insertBefore(li,thirdItem)

}




insertElement()
insertText()
insertHTML()
insertBeforeItem()


/*
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
*/
