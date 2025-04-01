const person = {
    name: "홍길동",
    foo(callback) {
        setTimeout(callback.bind(this), 1000);
    }
}
// 일반함수 호출은 this 가 전역객체 입니다.
person.foo(
    function () {
        // this window라는 전역객체가 됩니다.
        console.log(this.name);
    }
);