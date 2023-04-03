function getData(endpoint, cb) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', endpoint);

        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    resolve(JSON.parse(this.responseText));
                } else {
                    reject('Something went wrong');
                }
            }
        };

        setTimeout(() => {
            xhr.send();
        }, Math.floor(Math.random() * 3000) + 1000);
    });
}

getData('./movies.json')
    .then((movies) => {
        console.log(movies);
        return getData('./directors.json');
    })
    .then((directors) => {
        console.log(directors);
        return getData('./actors.json');
    })
    .then((actors) => {
        console.log(actors);
    })
    .catch((err) => {
        console.log(err);
        return 234;
    })
    .then((error) => console.log('This will run no matter what', error));
