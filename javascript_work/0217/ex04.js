const a = { aa: 10, bb: 20 };
const b = { bb: 30, cc: 40 };

const ab = { ...a, ...b };

console.log(ab);

a.aa = 5;
console.log(a);
console.log(ab);
