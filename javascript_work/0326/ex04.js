const arr1 = [1, 2];
const arr2 = [3, 4];

const result = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);

result.unshift(3);  // shift()
result.push(10);    // pop()
// [3,1,2,3,4,10]
result.splice(2, 1, 5, 10);
console.log(result);

const result2 = [3, ...arr1, 5, ...arr2, 10];
console.log(result2);