// Object.create(null);
// Object.create(bar.prototype); === new bar();

const obj = {
    // constructor 생성자 호출시 prototype(개발자수정가능) 가지고 생성
    // 생성자 함수 사용 가능 [[construct]] [[call]] 있음.
    bar: function () { },  

    // [[call]] 있음.
    foo() { },
    // [[call]] 있음.
    arrow: () => { },
    // [[construct]] [[call]] 없음.
    test: {},
}
// obj.test();

// new obj.bar(); // [[costurct]]
// obj.bar(); // [[call]]

// new obj.foo(); // XXX 생성자 함수 호출 불가능 consturct가 없기 때문에
// obj.foo(); // 일반 함수 호출 가능

console.log(obj.foo.hasOwnProperty('prototype'));
console.log(obj.arrow.hasOwnProperty('prototype'));
console.log(obj.bar.hasOwnProperty('prototype'));

new obj.bar(); // 이것만 사용가능...

// new obj.foo();
// new obj.arrow();
// new obj.test();