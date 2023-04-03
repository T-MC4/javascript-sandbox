function getUser() {
    showSpinner();
    fetch('https://randomuser.me/api')
        .then((response) => response.json(response))
        .then((data) => {
            hideSpinner();
            displayUser(data.results[0]);
        });
}

function displayUser(data) {
    document.querySelector('#user').innerHTML = `
        <div class="flex justify-between">
          <div class="flex">
            <img
              class="w-48 h-48 rounded-full mr-8"
              src="${data.picture.large}"
            />
            <div class="space-y-3">
              <p class="text-xl">
                <span class="font-bold">Name: </span>${data.name.first} ${data.name.last}
              </p>
              <p class="text-xl">
                <span class="font-bold">Email: </span> ${data.email}
              </p>
              <p class="text-xl">
                <span class="font-bold">Phone: </span> ${data.phone}
              </p>
              <p class="text-xl">
                <span class="font-bold">Location: </span> ${data.location.city} ${data.location.state}
              </p>
              <p class="text-xl"><span class="font-bold">Age: </span> ${data.dob.age}</p>
            </div>
          </div>
        </div>`;
}

function showSpinner() {
    document.querySelector('.spinner').style.display = 'block';
}

function hideSpinner() {
    document.querySelector('.spinner').style.display = 'none';
}

// Event Listener
document.querySelector('#generate').addEventListener('click', getUser);
