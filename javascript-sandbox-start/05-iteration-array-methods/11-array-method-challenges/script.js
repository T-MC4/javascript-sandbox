// Challenge 1
const people = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
    phone: '111-111-1111',
    age: 30,
  },
  {
    firstName: 'Jane',
    lastName: 'Poe',
    email: 'jane@gmail.com',
    phone: '222-222-2222',
    age: 25,
  },
  {
    firstName: 'Bob',
    lastName: 'Foe',
    email: 'bob@gmail.com',
    phone: '333-333-3333',
    age: 45,
  },
  {
    firstName: 'Sara',
    lastName: 'Soe',
    email: 'Sara@gmail.com',
    phone: '444-444-4444',
    age: 19,
  },
  {
    firstName: 'Jose',
    lastName: 'Koe',
    email: 'jose@gmail.com',
    phone: '555-555-5555',
    age: 23,
  },
]


const youngPeople1 = [];

people.forEach(function (item) {
  if (item.age <=25) {
    youngPeople1.push({name: item.firstName + ' ' + item.lastName, 
    email: item.email})
  }})

console.log(youngPeople1);

const youngPeople = people
  .filter(obj => obj.age <= 25)
  .map(obj => ({
    name: obj.firstName + ' ' + obj.lastName, 
    email: obj.email
  }));


// Challenge 2
const numbers = [2, -30, 50, 20, -12, -9, 7];

const positiveNumbers = numbers
  .filter(num => num > 0)
  .reduce((acc, num) => acc + num, 0);

// console.log(positiveNumbers);

// Challenge 3
const words = ['coder', 'programmer', 'developer'];

const capitalizadWords = words
  .map(word => word.charAt(0).toUpperCase() + word.slice(1));

// console.log(capitalizadWords);