// prototype
// const arr = [] => Array.prototype -> Object.prototype
// const obj = {} => Object.prototype
// const obj2 = Object.create(); -> prototype 없음.

// 프로토타입을 null 지정해서 obj 객체 생성해라
const obj = Object.create(null);
console.log(obj.__proto__);

// ES5 __proto__  get 메서드 실행 되면서 prototype
// ES6 getPrototypeOf() prototype 구하는게 더 좋은 방법이다

const obj2 = {};
console.log(obj2.__proto__);
console.log(Object.getPrototypeOf(obj2));