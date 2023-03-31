const objLiteral = {
    name: 'Rectangle',
    width: 30,
    length: 20,
    area: function () {
        return this.width * this.length;
    },
};

console.log(objLiteral.area());
