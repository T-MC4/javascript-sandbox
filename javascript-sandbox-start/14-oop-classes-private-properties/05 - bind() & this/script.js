class Test {
    constructor() {
        this.name = 'localhost';

        document
            .querySelector('button')
            .addEventListener('click', this.getName.bind(this));
    }

    getName() {
        console.log(this.name);
    }
}

const test = new Test();
test.getName();
