class Shape {
    constructor(name) {
        this.name = name;
    }

    logName() {
        console.log('Shape Name: ' + this.name);
    }
}

class Rectangle extends Shape {
    constructor(name, height, width) {
        super(name);

        this.height = height;
        this.width = width;
    }

    logName() {
        console.log('Rectangle Name: ' + this.name);
    }
}

class Circle extends Shape {
    constructor(name, radius) {
        super(name);

        this.radius = radius;
    }

    logName() {
        console.log('Circle Name: ' + this.name);
    }
}

const rec = new Rectangle('Rect 1', 20, 20);
rec.logName();

const cir = new Circle('Circle 1', 30);
cir.logName();

console.log(rec instanceof Shape);
console.log(rec instanceof Rectangle);
