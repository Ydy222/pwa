// const person1 = {
//     name: "홍길동",
//     age: 20,
// }

// const person2 = {
//     name: "박길동",
//     age: 20
// }

// const person3 = {
//     name: "이길동",
//     age: 20
// }
// 공부 ... 10시간... => 4시간...
function Person(name, age) {
    this.name = name;
    this.age = age;
}
function aa(){}

const person1 = new Person('홍길동',20);
const person2 = new Person('박길동',20);
const person3 = new Person('이길동',20);

console.log(person1 instanceof Person);
console.log(person1 instanceof aa);

// const test = {};
// test();
// new test();

function test(){}   // [[call]][[construct]]
test();     // [[call]] 함수 호출 가능
new test(); // [[construct]] new객체 생성가능

// 함수도 객체이다. 객체가 가지고 있는 내부 슬롯보다
// 더 많은 것을 가지고 있다.
