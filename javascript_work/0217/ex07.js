// 익명함수 즉시 호출
const res1 = (function (x,y){
    console.log(x);
    console.log(y);
    return x-y;
})(10,20);

// 이름이 없으면 익명함수
// 이름이 있으면 기명함수

console.log(res1);

const f = function (x,y){
    return x+y;
}

const res = f(10,20);
console.log(res);