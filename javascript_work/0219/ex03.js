// 고차 함수 매개변수가 함수 반환되는 값이 함수
var res = (function (){
    var x = 5;
    var y = 7;
    // return x+y;
    return function(){
        console.log(x+y);
    };
})();
res();
console.log(res);
const a = 10;
console.log(typeof res);
console.log(typeof a);