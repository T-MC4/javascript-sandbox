// Add an event listener for the button
// Create a function that will make a request to https://api.chucknorris.io/jokes/random using the XMLHttpRequest object
// Get the data that is sent back(this.response Text), parse the JSON and get the joke from it
// Display the joke in the page(you can use the innerHTML property)

const btn = document.getElementById('joke-btn');

function getJoke() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', 'https://api.chucknorris.io/jokes/random');
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            const data = this.responseText;
            const joke = JSON.parse(data);
            document.getElementById('joke').innerHTML = `${joke.value}`;
        } else {
            document.getElementById('joke').innerHTML = `Something went wrong`;
        }
    };
    xhr.send();
}

// Event Listeners
btn.addEventListener('click', getJoke);
document.addEventListener('DOMContentLoaded', getJoke);
