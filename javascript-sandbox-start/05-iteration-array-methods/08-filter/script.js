const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// .filter() method
const result = x.filter(function (element) {
    return (element > 5);
})

// Short version
const result1 = x.filter(element => element > 5);
console.log(result1);

// .forEach() method
const result3 = []
x.forEach(function (item) {
    if (item > 5) {
        result3.push(item);
    }
});

// .forEach() method - short version
const result4 = []
x.forEach(item => item > 5 && result4.push(item));
