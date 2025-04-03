const str = "abcdef";

// reverse -> String.prototype.reverse 함수없음
// console.log(str.reverse());

const arrstr = str.split('');
console.log(arrstr);

// Array.prototype.reverse() 함수 있음
const reverseStr = arrstr.reverse();
console.log(reverseStr);
console.log(reverseStr.join(''));

console.log(str.split('').reverse().join(''))