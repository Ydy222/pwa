// 객체 생성방법
// 1. 객체 리터럴
// 2. new 생성자함수 사용

function Circle() {
    this.radius = 5
    this.getDiameter =
        function () { return 2 * this.radius }
}

const newCircle = new Circle();

// const circle = {
//     radius: 5,
//     getDiameter() {
//         return 2 * this.radius;
//     }
// }

// console.log(circle.getDiameter())