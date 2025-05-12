const obj = {
  aa: 10,
  bb: 20,
  [Symbol.for("aaa")]: 1, // enumable :false
  [Symbol.for("bbb")]: 1, // enumable :false
};

console.log(obj[Symbol.for("aaa")]);

// Symbol은 프로퍼티 속성을 확인 할수 없음.
// console.log(
//     Object.getOwnPropertyDescriptor(obj, [Symbol.for("aaa")])
// );
console.log(Object.getOwnPropertySymbols(obj)[0]);
console.log(Object.getOwnPropertyDescriptor(obj, "aa"));

for (const key in obj) {
  console.log(`key = ${key}`);
}
