
function Circle() {
    this.radius = 5;
    // this.getDiameter = function () { return 2 * this.radius }
}

Circle.prototype.getDiameter = function () { return 2 * this.radius }

const c1 = new Circle();
console.log(c1.getDiameter());