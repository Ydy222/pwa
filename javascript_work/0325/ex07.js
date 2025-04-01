// push 원본배열이 변경 O
// concat 원본배열이 변경 X

const arr = [1, 2, 3];
arr.push(4);
console.log(arr);


const result = arr.concat(5);
console.log(arr);


console.log(`result =`);
console.log(result);


