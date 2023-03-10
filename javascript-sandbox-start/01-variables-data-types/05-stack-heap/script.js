// Values are stored on the Stack
const name = 'John';
const age = 30;

// Objects are stored on the Heap
const hobbies = ['movies', 'music'];

// Reference to the object
const person = {
    name: 'Thomas',
    age: 30,
}

let newPerson = person;
newPerson.name = "Tony";

console.log(person);
console.log(newPerson);
