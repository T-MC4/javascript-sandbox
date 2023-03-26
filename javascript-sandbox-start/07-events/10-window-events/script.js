// window.onload = function () {
//     document.querySelector('h1').textContent = 'Hello World';
// };

window.addEventListener('load', () => {
    console.log('Page Loaded');
});

window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Loaded');
});

console.log('Run Code');

window.addEventListener('resize', () => {
    document.querySelector(
        'h1'
    ).textContent = `${window.innerWidth} x ${window.innerHeight}`;
});

window.addEventListener('scroll', () => {
    // console.log(`${window.scrollX} x ${window.scrollY}`);

    if (window.scrollY > 80) {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
});

window.addEventListener('focus', () => {
    document.querySelectorAll('p').forEach((p) => (p.style.color = 'red'));
});
