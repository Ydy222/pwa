const numbers = [1, 2, 3];
const pows = [];
for (let i = 0; i < numbers.length; i++) {
    // console.log(i);
    // console.log(numbers[i]);
    pows.push(numbers[i] ** 2);
}
console.log(pows);

pows.length = 0;

const result = numbers.forEach(item => {
    // console.log(item);
    pows.push(item ** 2);
})
console.log(pows);
console.log(`result = ${result}`);

const pows1 = numbers.map(item=>{
    return item**2;
})

console.log(pows1);

// 1. for구문 2.forEach 3.map
