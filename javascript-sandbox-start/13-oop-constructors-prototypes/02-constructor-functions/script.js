function Rectangle(name, width, length) {
    this.name = name;
    this.width = width;
    this.length = length;
    this.area = function () {
        return this.width * this.length;
    };
}

const rect1 = new Rectangle('Rectangle 1', 20, 30);
const rect2 = new Rectangle('Rectangle 2', 40, 30);
const rect3 = new Rectangle('Rectangle 3', 15, 20);

console.log(rect1.area());
console.log(rect2.area());
console.log(rect3.area());

// 1. A new empty object is created.
// 2. The constructor function is called with the arguments that we passed in.
// 3. The 'this' keyword is set to the new empty object.
// 4. The new object is returned from the constructor function.

console.log(rect2.constructor);
console.log(rect2 instanceof Rectangle);
