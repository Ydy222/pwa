// es5
// const oobj = { aa: 10, bb: 20 };

// const aa = oobj.aa;
// const bb = oobj.bb;

// es6
// const obj = { aa: 10, bb: 20 };
// const { aa, bb } = obj;

// const { aa: a, bb: b } = { aa: 10, bb: 20 };
const { aa: a = 10, bb: b } = { bb: 20 };

// console.log(aa);
// console.log(bb);

console.log(a);
console.log(b);
