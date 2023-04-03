const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' },
];

/* This is a function that returns a promise object. 
It has many properties, but 3 of them are Value, Status, and onFufillment.
Once the brower's timer api is done running, and the Value property is assigned the value passed into the resolve or reject functions, then the Status property will update from Pending to Resolved, and the onFulfillment property will get assigned the function passed into the .then method of the promise object, with the value of the Value property as the argument*/
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = false;

            if (!error) {
                posts.push(post);
                resolve();
            } else {
                reject('Something went wrong');
            }
        }, 2000);
    });
}

function getPosts() {
    setTimeout(() => {
        posts.forEach(function (post) {
            const div = document.createElement('div');
            div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
            document.querySelector('#posts').appendChild(div);
        });
    }, 1000);
}

function showError(error) {
    const div = document.createElement('div');
    div.innerHTML = `<strong>${error}</strong>`;
    document.querySelector('#posts').appendChild(div);
}

createPost({ title: 'Post Three', body: 'This is post' })
    .then(getPosts)
    .catch(showError);
