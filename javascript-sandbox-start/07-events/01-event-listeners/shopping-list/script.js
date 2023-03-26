const btn = document.querySelector('.btn-clear')

function onClear() {
    const items = document.querySelectorAll('li')
    
    // forEach Variation
    // const onClear = () => items.forEach(item => item.remove())
    
    // While Loop Variation (more Performant)
    const itemList = document.querySelector('ul')
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild)
    }
}

btn.addEventListener('click', onClear)
// function onClear() {items.forEach((item) => item.remove())}
// btn.onclick = onClear;

// setTimeout(() => {
//     btn.removeEventListener('click', onClear)
// }, 5000);

// setTimeout(() => {
//     btn.click()
// }, 5000);