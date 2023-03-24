// Create a new string called "myNewString" that holds the value of "Developer", using the value from "myString"
const myString = 'developer';

myNewString = `${myString.charAt(0).toUpperCase()}${myString.substring(1)}`;

console.log(myNewString); //'Developer'