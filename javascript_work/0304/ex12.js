// 렉시컬 스코프
// 클로저 
// 1. 외부변수 참조
// 2. 반환되는게 함수

const outerVar = "전역공간";

function outer() {
    let outerVar = "외부 변수";
    return function inner() {
        // inner 함수는 자신이 선언된 시점의 스코프 체인을 통해 outerVar에 접근 가능
        outerVar = outerVar + '!';
        console.log(outerVar); // "외부 변수" 출력
    }
}

const out = outer();
out();
out();
out();
out();

/*
const outerVar = "전역공간";

function outer() {
    let outerVar = "외부 변수";
    function inner() {
        // inner 함수는 자신이 선언된 시점의 스코프 체인을 통해 outerVar에 접근 가능
        console.log(outerVar); // "외부 변수" 출력
    }
    inner();
}

outer();
*/