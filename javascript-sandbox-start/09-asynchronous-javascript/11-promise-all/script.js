// Write a function that calls data from .json files asynchronously and in a specific order

// function fetchData(link, cb) {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', link);
//     xhr.onreadystatechange = function () {
//         if (this.readyState === 4 && this.status === 200) {
//             cb(JSON.parse(this.responseText));
//         }
//     };
//     setTimeout(() => {
//         xhr.send();
//     }, Math.floor(Math.random() * 3000) + 1000);
// }

// fetchData('./actors.json', (responseText) => console.log(responseText));

function getData(link) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', link);

        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    resolve(JSON.parse(this.responseText));
                } else {
                    reject('Error');
                }
            }
        };

        setTimeout(() => {
            xhr.send();
        }, Math.floor(Math.random() * 3000) + 1000);
    });
}

getData('./movies.json')
    .then((movies) => console.log(movies))
    .catch((error) => console.log(error));
