function replaceFirstItem() {
    const firstItem = document.querySelector('li');
    
    const li = document.createElement('li')
    li.textContent = 'Replaced first'

    firstItem.replaceWith(li)
}

function replaceSecondItem() {
    const secondItem = document.querySelector('li:nth-child(2)');

    secondItem.outerHTML = '<li>Replaced Second</h2>'
}

// function replaceAll() {
//     const lis = document.querySelectorAll('li');

//     lis.forEach((item, index) => {
        
//         if (index === 1) {
//             item.innerHTML = "Replace Second"
//         } else {
//             item.innerHTML = 'Replace All'
//         }
//     })
// }

function replaceAll() {
    const lis = document.querySelectorAll('li');

    lis.forEach((item, index) => {item.outerHTML = index === 1 ? '<li>Second Item</li>' : '<li>Item</li>'}
    )
}

function replaceChildHeading() {
    const header = document.querySelector('header');
    const h1 = document.querySelector('header h1');

    const h2 = document.createElement('h2');
    h2.textContent = 'Shopping List - H2';
    h2.id = 'app-title';

    header.replaceChild(h2, h1);
}

replaceFirstItem()
replaceSecondItem()
replaceAll()
replaceChildHeading()