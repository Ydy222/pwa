// 배열 객체 디스트럭쳐링
// const [a, b] = [10, 20];
// const { cc, dd, aa, bb } = { aa: 20, bb: 30, cc: function () { }, dd: { aaa: 10 } };

// console.log(a);
// console.log(bb);
// console.log(dd);
// console.log(dd.aaa);

const person = {};

Object.defineProperties(person, {
    firstName: {
        value: "Alice",
        writable: true,
        enumerable: true,
        configurable: true
    },
    lastName: {
        value: "Bob",
        writable: true,
        enumerable: false,
        configurable: false
    },
    fullname: {
        get() {
            return `${this.firstName} ${this.lastName}`;
        },
        set(fn) {
            [this.firstName, this.lastName] = fn.split(' ');
        },
        enumerable: true,
        configurable: true
    }
});

person.fullname = "홍 길동";
console.log(person.fullname);

// delete person.firstName;
// delete person.lastName;

// person.firstName = "길동";
// person.lastName = "홍";

// console.log(person.firstName);
// console.log(person.lastName);

// for (const key in person) {
//     console.log(key);
// }