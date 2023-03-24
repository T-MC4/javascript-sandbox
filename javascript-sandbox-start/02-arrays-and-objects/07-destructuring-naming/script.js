const firstName = "John";
const lastName = "Doe";
const city = "New York";

const profile = {
    firstName,
    lastName,
    city
};

console.log(profile);


// Description: Destructuring and naming

const todo = {
    id: 1,
    title: "My todo",
    text: {
        name: "Main",
    }
};

const { 
    id: todoId, 
    title, 
    text: {name} 
} = todo;

console.log(todoId);


// Descruive Arrays

const arr = [1, 2, 3, 4, 5, 'test'];

const [first, second, ...rest] = arr;

console.log(first, second, rest);












