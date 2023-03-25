const a = false;

// Using if

// if (a) {
//     console.log("a is true");
// }

// Using ternary operator
const redirect = !a
? (console.log("a is true"), console.log("Yup")) 
: console.log("a is false");

// Shorthand for not using null
a && console.log("a is true");