const arr = [1, 2, 3, 4, 5];

console.log(Symbol.iterator in arr);

for (const element of arr) {
  console.log(element);
}

console.log(...arr);

const [a, ...rest] = arr;
console.log(`a = ${a}`);
console.log(`rest = ${rest}`);
