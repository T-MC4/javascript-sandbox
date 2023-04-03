const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' },
];

function createPost(post, cb) {
    setTimeout(() => {
        posts.push(post);
        cb();
    }, 2000);
}

function getPost() {
    setTimeout(() => {
        posts.forEach((post) => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${post.title} - ${post.body}</strong>`;
            document.getElementById('posts').appendChild(li);
        });
    }, 1000);
}

createPost({ title: 'Post Three', body: 'This is post 3' }, getPost);
