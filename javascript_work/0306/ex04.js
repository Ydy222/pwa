const child = { a: 10 };
const parent = { x: 1 };

console.log(child.__proto__);

child.__proto__ = parent;

console.log(child.__proto__);
console.log(parent.__proto__);
console.log(child.x);

console.log(child.hasOwnProperty('a'));
console.log('child.hasOwnProperty(x) = '+child.hasOwnProperty('x'));

console.log(Object.prototype.hasOwnProperty('b'));