// const arr = [1, 2, 3, 4, 2];

// console.log(arr.indexOf(2));
// console.log(arr.indexOf(2, 2));
// console.log(arr.indexOf(4));

const arr = ['a', 'b', 'c'];

console.log(arr.includes('c'));
console.log(arr.includes('d'));

// es6
if (arr.indexOf('e') === -1) {
    arr.push('e');
}

// es7
// if(!arr.includes('e')){
//     arr.push('e');
// }

console.log(arr);