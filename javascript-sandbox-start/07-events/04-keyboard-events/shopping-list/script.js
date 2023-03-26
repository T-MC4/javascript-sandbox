const input = document.querySelector('#item-input');

// const onKeyPress = (e) => console.log('Pressed ' + e.key);
// const onKeyDown = (e) => console.log('Down ' + e.key);
// const onKeyUp = (e) => console.log('Up ' + e.key);

const onKey = (e) => {
    // key
    if (e.key === 'Enter') {
        alert('You hit Enter!');
    }

    // keycode
    if (e.keyCode === 13) {
        console.log('You hit Enter Again!');
    }

    // code
    if (e.code === 'Digit1') {
        console.log('You hit 1');
    }

    // Are they Holding down the key?
    if (e.repeat) {
        // console.log("You're holding down " + e.key);
    }

    // console.log('Shift: ' + e.shiftKey);
    // console.log('Alt: ' + e.altKey);
    // console.log('Control: ' + e.ctrlKey);

    if (e.shiftKey && e.key === 'K') {
        console.log("You're pressing capital K");
    }
};

// Event Listeners
// input.addEventListener('keypress', onKeyPress);
// input.addEventListener('keydown', onKeyDown);
// input.addEventListener('keyup', onKeyUp);
input.addEventListener('keydown', onKey);
