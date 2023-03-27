// const myCallback = () =>
//     (document.querySelector('h1').textContent = 'Callback Successfull');

const randomColor = (a) => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = `#${randomColor}`;
    console.log(a);
};

let intervalID;

const startInterval = () =>
    !intervalID &&
    (intervalID = setInterval(randomColor, 2000, 'Hello Console'));

const stopInterval = () => clearInterval(intervalID);

// Event Listener
document.querySelector('#stop').addEventListener('click', stopInterval);
document.querySelector('#start').addEventListener('click', startInterval);
