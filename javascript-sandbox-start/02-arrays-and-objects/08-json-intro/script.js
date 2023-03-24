const post = {
    title: "My great post",
    body: "This is my first post",
};

// Convert to JSON String
const postJSON = JSON.stringify(post);

// console.log(postJSON);

// Convert to Object
const postObj = JSON.parse(postJSON);

console.log(postObj.body);

// Create array of object literals
const posts = [
    { title: "Post One", body: "This is post one" },
    { title: "Post Two", body: "This is post two" },
];

const postsJSON = JSON.stringify(posts);

// console.log(postsJSON);