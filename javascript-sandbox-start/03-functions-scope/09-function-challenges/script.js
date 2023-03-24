// Super abbreviated / lots of syntactic sugar
((length, width) => console.log(`The area of rectangle with length ${length} and width ${width} is ${length * width}`))(5, 6);

const getCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;

console.log(getCelsius(32)); // 0

// const minMax = (arr) => [Math.min(...arr), Math.max(...arr)]

function minMax(arr) {
    min = Math.min(...arr);
    max = Math.max(...arr);
    
    const ObjMinMax = {
        min,
        max,
    }
    return ObjMinMax;
}

console.log(minMax([1, 2, 3, 4, 5])); // [1, 5]

