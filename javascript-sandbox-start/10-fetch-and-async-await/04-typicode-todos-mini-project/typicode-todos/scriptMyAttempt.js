const list = document.querySelector('#todo-list');
const addBtn = document.querySelector('form button');
const formInput = document.querySelector('#title');

function getData(link) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        const apiLink = link + '?_limit=5';
        xhr.open('get', apiLink);

        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    resolve(JSON.parse(this.responseText));
                    console.log(JSON.parse(this.responseText));
                } else {
                    reject('Failed');
                }
            }
        };
        setTimeout(() => {
            xhr.send();
        }, 0);
    });
}

function onAddData(e) {
    e.preventDefault();
    const todo = formInput.value;
    displayData(todo);
}

function displayData(obj) {
    console.log(obj);
    const div = document.createElement('div');
    div.innerHTML = obj;
    list.appendChild(div);
}

function displayAPIData(todo) {
    todo.forEach((obj) => {
        const div = document.createElement('div');
        div.innerHTML = obj.title;
        list.appendChild(div);
    });
}

function putData(input) {
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', link);
}

function onClick(e) {
    if (e.target.tagName === 'DIV') {
        // console.log('tagName is DIV');
        if (e.target.class === undefined && e.target.id !== 'todo-list') {
            // console.log('class is Undefined');
            e.target.className = 'done';
            // console.log('Class assigned');
        }
    }
}

function showError(err) {
    console.log(err);
}

// Event Listeners
function init() {
    addBtn.addEventListener('click', onAddData);
    list.addEventListener('click', onClick);
}

// Function Calls
init();

getData('https://jsonplaceholder.typicode.com/todos')
    .then(displayAPIData)
    .catch(showError);

// putData('https://jsonplaceholder.typicode.com/todos');
