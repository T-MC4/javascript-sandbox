function removeItem() {
    const li = document.querySelector('li:first-child');
    li.remove()
}

function removeItem1(itemNum) {
    const ul = document.querySelector('ul')
    const li = document.querySelector(`li:nth-child(${itemNum})`)
 
    ul.removeChild(li)
}

function removeItem2(itemNum) {
    const li = document.querySelectorAll('li')[itemNum - 1]
    li.remove()
}

const removeItem3 = (itemNum) =>
    document.querySelectorAll('li')[itemNum - 1].remove()

// removeItem()
removeItem3(3)