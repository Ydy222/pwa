// 함수 선언하게되면 Function.prototype
function test(){
    console.log('test함수 호출');
    // const value = arguments.slice(0,2);
    // console.log(value);
}

test(10,20,30); // 함수 호출...

test.call();    // 함수 호출...
test.apply();   // 함수 호출...
// test.bind();