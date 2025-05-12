// node 22 버전 
// node 13 버전
function* genFunc() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = genFunc();
console.log(Symbol.iterator in gen);
console.log("next" in gen);

console.log(Object.getOwnPropertyDescriptors("gen"));
console.log(Object.getOwnPropertySymbols("gen"));

const obj = { a: 10, b: 20 };
console.log("a" in obj);
console.log("b" in obj);
console.log("c" in obj);
