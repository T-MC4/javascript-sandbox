const list = document.querySelector('#todo-list');
const addBtn = document.querySelector('form button');
const formInput = document.querySelector('#title');
const apiURL = 'https://jsonplaceholder.typicode.com/todos';

function getData() {
    fetch(apiURL + '?_limit=5')
        .then((res) => res.json())
        .then((data) => {
            data.forEach((obj) => displayData(obj));
        });
}

function onAddData(e) {
    e.preventDefault();
    const todo = formInput.value;

    fetch(apiURL, {
        method: 'POST',
        body: JSON.stringify({
            title: todo,
            completed: false,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((res) => res.json())
        .then((data) => displayData(data));

    formInput.value = '';
}

function displayData(obj) {
    const div = document.createElement('div');
    div.innerHTML = obj.title;
    div.setAttribute('data-id', obj.id);
    div.classList.add('todo');
    // console.log(div);

    if (obj.completed) {
        div.classList.add('done');
    }

    list.appendChild(div);
}

function onClick(e) {
    if (e.target.classList.contains('todo')) {
        e.target.classList.toggle('done');

        updateData(e.target.dataset.id, e.target.classList.contains('done'));
    }
}

function updateData(id, completed) {
    console.log(id, completed);
    // The documentation shows for PUT that /posts/1 is the correct route, which means that we need to add id to the apiURL
    fetch(apiURL + '/' + id, {
        method: 'PUT',
        body: JSON.stringify({ completed }),
        headers: { 'Content-Type': 'application/json' },
    });
    // .then((res) => res.json())
    // .then((data) => console.log(data));
}

function deleteData(e) {
    if (e.target.classList.contains('todo')) {
        const id = e.target.dataset.id;
        console.log(id);

        fetch(apiURL + '/' + id, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then(() => e.target.remove());
    }
}

// Event Listeners
function init() {
    document.addEventListener('DOMContentLoaded', getData);
    addBtn.addEventListener('click', onAddData);
    list.addEventListener('click', onClick);
    list.addEventListener('dblclick', deleteData);
}

// Function Calls
init();

// putData('https://jsonplaceholder.typicode.com/todos');
