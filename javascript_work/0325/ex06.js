// const arr = [0];

// arr[100] = 100;

// console.log(Object.getOwnPropertyDescriptors(arr));

// console.log(arr);

const brr = [1, 2, 3, 4];

// delete brr[1];

// console.log(brr);
// console.log(brr.length);

// slice 자르는거 slice(0,3); -> [1,2,3]
// splice 자르는 반환... 
// splice(1,2) => 배열의 요소도 삭제되고 2,3이 반환

const remove = brr.splice(1, 2, 10, 20);

console.log(`remove ${remove}`);
console.log(brr);