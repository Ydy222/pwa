const circle1 = {
    radius: 5,
    getDiameter() {
        return 2 * this.radius;
    }
}

const circle2 = {
    radius: 10,
    getDiameter() {
        return 2 * this.radius;
    }
}

// const circle3 = {
//     radius: 20,
//     getDiameter() {
//         return 2 * this.radius;
//     }
// }

// const circle4 = {
//     radius: 40,
//     getDiameter() {
//         return 2 * this.radius;
//     }
// }

// const circle5 = {
//     radius: 40,
//     getDiameter() {
//         return 2 * this.radius;
//     }
// }

console.log(circle1.getDiameter());
console.log(circle2.getDiameter());