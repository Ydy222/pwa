// NODE 개발환경에서는 전역객체에 암묵적으로 선언되지 않는다.
// window 개발환경에서는 전역객체에 자동으로 선언된다.
var a = 10;

console.log(a);

// 실행환경에 따라 자동으로 global window 설정된다.
console.log(globalThis.a);
// 브라우저
// console.log(window.a);
// // NODE
// console.log(global.a);

var b = 20.4;

console.log(Math.ceil(b));
console.log(Math.floor(b));
console.log(Math.round(b));

const c = 20;
console.log(c);

// var 호이스팅이 되면서 undefined출력
// let const 호이스팅이 되긴 하지만 자바스크립트에서 에러로 진행