const set = new Set([1, 2, 2, 3]);
console.log(set.size); // 3
console.log(set.has(2)); // true
set.add(4);
console.log([...set]); // [1, 2, 3, 4]