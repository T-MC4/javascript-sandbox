// for ([initialExpression]; [conditionExpression]; [incrementExpression])
//   statement;

// INITITAL EXPRESSION - Initializes a variable/counter
// CONDITION EXPRESSION - Condition that the loop will continue to run as long as it is met or until the condition is false
// INCREMENT EXPRESSION - Expression that will be executed after each iteration of the loop. Usually increments the variable
// STATEMENT - Code that will be executed each time the loop is run. To execute a `block` of code, use the `{}` syntax

// for (let i=0; i<=10; i++) {
//     console.log('Number: ' + i);

//     for (let j=0; j<=10; j++) {
//         console.log(`\t${i} x ${j} = ${i*j}`);
//     }
// }


const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// for (let i=0; i<cars.length; i++) {
//     if (cars[i] === 'Honda') {
//         console.log(`${cars[i]}s are pretty sick`);
//     } else {
//         console.log(cars[i]);
//     }
// };

for (let i=0; i<cars.length; i++) {
    cars[i] === 'Honda' 
    ? console.log(`${cars[i]}s are pretty sick`) 
    : console.log(cars[i]);
}