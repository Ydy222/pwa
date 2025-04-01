// es5 에서는 1. 일반함수 호출 2. 생성자 함수호출
const foo = function () {
    return 1;
}
console.log(foo());
console.log(new foo());
// 클래스 축약 표현
const obj = { foo };
console.log(obj.foo());

// 메서드 축약 함수 es6
const obj1 = { foo() { return 2 } };
console.log(obj1.foo());

// 화살표 함수 es6
const obj2 = { foo: () => { return 2 } };
console.log(obj2.foo());

// non-constuctor
// new obj2.foo();