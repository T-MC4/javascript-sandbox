function sum(...numbers) {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return total;
};

console.log(sum(1,2,3,4,5,6,7,8,9,10));


// Random index
function getIndex(arr) {
    const index = Math.floor(Math.random() * arr.length);
    console.log(arr[index])
};

getIndex([1,2,3,4,5,6,7,8,9,10]);