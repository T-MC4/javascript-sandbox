const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// reduce() method
const sum = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
})

// Short version
const sum1 = numbers.reduce((acc, cur) => acc + cur, 10 /* initial value */)

console.log(sum1);

// for loop version 
let sum2 = 0;
for (let i = 0; i < numbers.length; i++) {
    sum2 += numbers[i];
}

// for of loop version
const sum3 = () => {
    let acc = 20;
    for (const cur of numbers) {
        acc += cur;
    }
    return acc;
}

console.log(sum3());