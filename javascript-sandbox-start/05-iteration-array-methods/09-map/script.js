const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers.map(function (element) {
    return element * 2;
});

const result1 = numbers.map(element => element * 2)

// Same with forEach
const result3 = [];
numbers.forEach(function (item) {
    return result3.push(item * 2);
    });

const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

/// Create an array of company names
const companyNames = companies.map(obj => obj.name);

//  Create an array of company names
const nameCategory = companies.map(obj => {
    return {
        name: obj.name,
        category: obj.category
    }
});

// Create an array of objects containing company name and length in years

const compAge = companies.map(obj => {
    return {
        name: obj.name,
        age: obj.end - obj.start
    }
})


// Chain map and filter
const squareAndDouble = numbers
    .map(value => Math.sqrt(value))
    .map(result => result * 2)
    .map(result => result * 10)


// Chaining different methods
const sqrtEvens = numbers
    .filter(num => num % 2 === 0)
    .map(result => Math.sqrt(result))
    .map(result => result * 2)


console.log(sqrtEvens);
