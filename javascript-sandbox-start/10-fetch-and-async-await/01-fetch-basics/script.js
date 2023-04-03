// Fetching a JSON file
// fetch('./movies.json')
//     .then((response) => response.json())
//     .then((data) => console.log(data));

// Fetching a text file
// fetch('./test.txt')
//     .then((response) => response.text())
//     .then((data) => console.log(data));

// Fetching from an API
fetch('https://api.github.com/users/T-MC4')
    .then((response) => response.json(response))
    .then((data) => console.log(data));
