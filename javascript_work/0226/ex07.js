// 함수는 객체이다 객체이므로 객체와 동일하게 동작한다.
// 함수객체는 일반객체에 가지고 있는 모든것을 가지고 있다.

// 객체 => 호출가능한 객체이다
function foo(){
}
// 객체
const foo2 = {};

foo();

foo2(); // 이거 못하는데??

// foo.aa = 10;
// foo.doA = function (){
//     console.log(this.aa);
// }

// foo.doA();

// console.log(foo);