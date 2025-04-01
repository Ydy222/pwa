function Person() {
}

const me = new Person();

// Person.prototype.constructor

const parent = {
};

// 프로토타입 연결은 __proto__ 와 setPrototypeOf 두가지로 변경 가능함
me.__proto__ = parent;
// Object.setPrototypeOf(me,parent);

console.log(me instanceof Person);
console.log(me instanceof Object);