// Vanilla Syntax
function newPlayer(name, lvl = 1, points) {
    const newPlayer = Object.create(functionStore);
    // console.log(newPlayer.__proto__);
    newPlayer.name = name;
    newPlayer.lvl = lvl;
    newPlayer.points = points;
    return newPlayer;
}

const functionStore = {
    gainXP: function () {
        this.points += Math.floor(Math.random() * 10) + 1;
        if (this.points >= 10) {
            this.lvl += 1;
            this.points -= 10;
        }
    },
    describe: function () {
        console.log(this.name, this.lvl, this.points);
    },
};

const p0 = newPlayer('To', 6, 5);
// console.log(p0);
p0.gainXP();
p0.describe();

// Vanilla Syntax using Prototype to store instead of functionStore
function newPlayer1(name, lvl = 1, points) {
    const newPlayer = Object.create(newPlayer1.prototype);
    // console.log(newPlayer.__proto__);
    newPlayer.name = name;
    newPlayer.lvl = lvl;
    newPlayer.points = points;
    return newPlayer;
}

newPlayer1.prototype.gainXP = function () {
    if (this.points >= 10) {
        this.lvl += 1;
        this.points -= 10;
    }
    this.points += Math.floor(Math.random() * 10) + 1;
    if (this.points >= 10) {
        this.lvl += 1;
        this.points -= 10;
    }
};
newPlayer1.prototype.describe = function () {
    console.log(this.name, this.lvl, this.points);
};

const p12 = newPlayer1('To', 6, 5);
console.log(p12);
p12.gainXP();
p12.describe();

// 'new' Syntax with storing in prototype property object
function NewPlayer(name, lvl = 1, points) {
    this.name = name;
    this.lvl = lvl;
    this.points = points;
}

NewPlayer.prototype.gainXP = function () {
    if (this.points >= 10) {
        this.lvl += 1;
        this.points -= 10;
    }
    this.points += Math.floor(Math.random() * 10) + 1;
    if (this.points >= 10) {
        this.lvl += 1;
        this.points -= 10;
    }
};
NewPlayer.prototype.describe = function () {
    console.log(this.name, this.lvl, this.points);
};

const p1 = new NewPlayer('Tony', 6, 5);
p1.gainXP();
p1.describe();

// Class syntax
class NewCharacter {
    constructor(name, lvl = 1, points) {
        this.name = name;
        this.lvl = lvl;
        this.points = points;
    }
    gainXP() {
        this.points += Math.floor(Math.random() * 10) + 1;
        if (this.points >= 10) {
            this.lvl += 1;
            this.points -= 10;
        }
    }
    describe() {
        console.log(this.name, this.lvl, this.points);
    }
}

const p2 = new NewCharacter('Tom', 10, 6);
p2.gainXP();
p2.describe();
