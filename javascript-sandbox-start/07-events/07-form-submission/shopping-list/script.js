const form = document.getElementById('item-form');

function onSubmit(e) {
    e.preventDefault();

    const input = document.getElementById('item-input').value;
    const priority = document.getElementById('priority-input').value;

    if (input === '' || priority === '0') {
        alert('Please fill in all fields');
        return;
    }

    console.log(input, priority);
}

function onSubmit2(e) {
    e.preventDefault();

    const formData = new FormData(form);

    // const input = formData.get('item');
    // const priority = formData.get('priority');

    const entries = formData.entries();
    const entriesArray = Array.from(entries);
    entriesArray.forEach((entry) => console.log(entry[1]));

    // console.log(entries);
    console.log(input, priority);
}

// Event Listeners
form.addEventListener('submit', onSubmit2);
