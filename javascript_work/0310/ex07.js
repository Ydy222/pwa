const person = {
    name: "홍길동",
    age: 30,
    addr: "대구"
}

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

console.log();

// 객체는 for in 으로 순회한다 {}
// 배열은 for of 으로 순회한다. []

// for(let i= 0; i<arr.length ; i++){}

for (const element of Object.keys(person)) {
    console.log(element);
}

for (const element of Object.values(person)) {
    console.log(element);
}

for (const element of Object.entries(person)) {
    console.log(element);
}

for (const [key, value] of Object.entries(person)) {
    console.log(`key ${key}`);
    console.log(`value ${value}`);
}

// 디스트럭쳐링 배열 분해 , 객체 분해
const { aa, bb } = { aa: 10, bb: 20 };

const arr = [10, 20, 30];
// const [a, b, c] = arr;
const [a, b, c] = [10, 20, 30];
console.log(a);
console.log(b);
console.log(c);