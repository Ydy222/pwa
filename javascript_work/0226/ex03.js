// const obj = {};
// obj.aa = 10;
// const person = {
//     name: '홍길동',
//     age: 20,
//     print: function () { 
//         return `이름 ${this.name} 나이 ${this.age}`;
//     }
// }

// const person = {
//     name: '홍길동',
//     age: 20,
//     print: function () { 
//         return `이름 ${this.name} 나이 ${this.age}`;
//     }
// }

// const person = {
//     name: '홍길동',
//     age: 20,
//     print: function () { 
//         return `이름 ${this.name} 나이 ${this.age}`;
//     }
// }

// const person = {
//     name: '홍길동',
//     age: 20,
//     print: function () { 
//         return `이름 ${this.name} 나이 ${this.age}`;
//     }
// }

function person(name, age) {
    // this {}
    this.name = name;
    this.age = age;
    this.print = function () {
        return `이름 ${this.name} 나이 ${this.age}`;
    }
}
// person();
// new person();

const p1 = new person('홍길동', 20);
console.log(p1);
console.log(p1.print());
const p2 = new person('박길동', 30);
console.log(p2);
console.log(p2.print());

const p3 = new person('박길동', 30);
