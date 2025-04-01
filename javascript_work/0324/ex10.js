const arr = Array.of(1,2,3,4)
console.log(arr);

const brr = Array.from([1,2,3,4]);
console.log(brr);

// for of 배열에서만 사용가능
for (const element of arr) {
    console.log(element)
}

// for in 객체에서 사용하는것
for (const element in arr) {
    console.log(element)
}

console.log(arr[-2])