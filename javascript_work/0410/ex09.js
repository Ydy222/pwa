const obj = { a: 10, b: 20, c: 30 };
// const copy = { a: obj.a, b: obj.b, c: obj.c };
const copy = { ...obj };

obj.a = 30;

console.log(obj);
console.log(copy);
