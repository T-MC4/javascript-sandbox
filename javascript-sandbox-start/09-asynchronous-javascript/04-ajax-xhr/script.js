const xhr = new XMLHttpRequest();

xhr.open('get', 'https://api.github.com/users/T-MC4/repos');

// readyState has 5 possible values
// - 0: request not initialized
// - 1: server connection established
// - 2: request received
// - 3: processing request
// - 4: request finished and response is ready
xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        const data = JSON.parse(this.responseText);
        data.forEach((obj) => {
            // console.log(`${obj.year} - ${obj.title}`);

            const li = document.createElement('li');
            li.innerHTML = `<strong>${obj.name}</strong> - ${obj.description}`;
            const ul = document.querySelector('#results');
            ul.appendChild(li);
        });
    }
};

xhr.send();
