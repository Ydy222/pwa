const num = 10.23;

// 반올림해서 문자열로 만들어주는 함수
// 원시값(primitive) -> 객체(래퍼)형태로 변경해서 함수 사용
const result = num.toFixed();
console.log(result);

console.log(0.1 + 0.2);

// javascript 버그??아닌가
// Number.EPSILON 오차의 범위가 true
console.log((0.1 + 0.2) == 0.3);

console.log(Math.abs(-1));
console.log(Math.abs(-5));
console.log(Math.abs(5));