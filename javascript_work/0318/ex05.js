// const arr = new Array(3);
// arr[0] = 10;
// console.log(arr); // [empty,empty,empty]

// Array.from(arr, (a, b) => {
//     console.log(`a = ${a}`);
//     console.log(`b = ${b}`);
// });


const ret = Array.from([10, 20, 30], (item, index) => {
    // return () => { return item * index };
    return () => item * index;
});

console.log(ret[0]());
console.log(ret[1]());
console.log(ret[2]());

// 클로저의 확장판...
const funcs = Array.from(new Array(3), (_, i) => () => i);
// [ ()=>0, ()=>1, ()=>2 ]
console.log(funcs);
console.log(funcs[0]());
console.log(funcs[1]());
console.log(funcs[2]());

// for (let i = 0; i< 3 ; i++){

// }