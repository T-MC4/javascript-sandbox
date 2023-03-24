// Normal function syntax

// function additiion(a, b) {
//     return a + b;
// }

// Arrow function syntax
const addition = (a, b) => {
    return a + b
    }; 

console.log(addition(1, 2));

// Implicit return
const add = (a, b) => a + b; 

console.log(add(1, 2));

// Return object

const createObject = () => ({
    name: 'John',
});

console.log(createObject());

// Return array

const createArray = [1, 2, 3];

createArray.forEach(function(n) {
    console.log(n);
})

createArray.forEach(n => console.log(n));



