const changeH1 = () =>
    (document.querySelector('h1').textContent = 'Hello World');

const intervalID = setTimeout(changeH1, 3000);

document.querySelector('#cancel').addEventListener('click', () => {
    console.log(intervalID);
    clearTimeout(intervalID);
});
