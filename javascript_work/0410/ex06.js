//es5 2014
//es6 2015
const arr = [1, 2, 3];
// const brr = arr.slice();
const brr = [...arr];

arr[0] = 20;
console.log(arr);
console.log(brr);
