// 클래스 특징
// 1. 클래스 이기 때문에 일반 함수 호출이 안된다

// window.y
y = 20;// var let const 없이 사용가능 use strict

function A1() {
    this.a = 10;
    this.b = 20;
}
// 생략가능 2. extends Object
class A2 {
    // 'use strict';
    doA() {
        // x = 10;
        console.log(this);
    }
}
A1(); // 일반함수 호출 가능
const a1 = new A1(); // 생성자 함수 호출 가능
for (const element in a1) {
    console.log(element);
}

// A2(); // 일반함수 호출 불가능
const a2 = new A2(); // 생성자 함수 호출 가능
a2.doA();