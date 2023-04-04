const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ name: 'John', age: 35 });
    }, 2000);
});

// promise.then((obj) => console.log(obj));

async function getPromise() {
    const response = await promise;
    console.log(response);
}

// getPromise();

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((res) => res.json())
//     .then((data) => console.log(data));

async function getUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    console.log(data);
}

const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    console.log(data);
};

getUsers();
