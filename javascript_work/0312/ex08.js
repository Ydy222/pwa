// node 에서는 global 변수에 전역으로 붙지 않는다.
// 브라우저에서는 window 변수에 전역으로 붙는다.
var value = 1;

const obj = {
    value: 10,

    foo() {
        console.log(`this ${JSON.stringify(this)}`)
        console.log(`this.value ${this.value}`);
        function bar() {
            console.log(`this ${this}`)
            console.log(`this.value ${this.value}`);
        }
        bar();
    }
}

obj.foo();