function getData(link, CALLBACK) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', link);
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            CALLBACK(JSON.parse(this.responseText));
        }
    };

    setTimeout(() => {
        xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
}

// function getMovies(link, cb) {
//     console.log(link);
//     cb();
// }

// function getDirectors(link) {
//     console.log(link);
// }

getData('./actors.json', (link) => {
    console.log(link);
    getData('./movies.json', (link) => {
        console.log(link);
        getData('./directors.json', (link) => {
            console.log(link);
        });
    });
});
