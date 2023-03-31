function Rectangle(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
    this.area = function () {
        return this.width * this.height;
    };
}

// Create Objects
const rect1 = new Rectangle('Rectangle 1', 20, 30);
const rect2 = new Rectangle('Rectangle 2', 40, 60);

// Create properties
rect1.color = 'red';
rect2.perimeter = () => {
    rect2.width * rect2.length;
};

// Remove properties
delete rect2.perimeter;

// Check properties
console.log(rect1.hasOwnProperty('color'));

// Get keys
console.log(Object.keys(rect1));

// Get Values
console.log(Object.values(rect1));

// Get Entries
console.log(Object.entries(rect1));

for (let [keys, values] of Object.entries(rect1)) {
    if (typeof values !== 'function') console.log(`${keys} - ${values}`);
}
// console.log(rect1, rect2);
