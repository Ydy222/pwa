 // 원시타입.. 함수프로퍼티 변수프로퍼티X
const dd = 10;
dd.toFixed();

const a = "a,b,c"; 
console.log(a.split(','));
a.aa = 10; // 무시
a[0] = 'c'; // 무시
console.log(a);

console.log(Object.getOwnPropertyDescriptors(a));

// 객체 타입 함수프로퍼티 변수프로터피O
const b = new String("a,b,c");
console.log(b.split(','));
b.aa = 10;
console.log(b);