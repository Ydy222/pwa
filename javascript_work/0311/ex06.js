// 객체값이니깐 당연히 Number.prototype 안에 있는 toFixed()함수 사용가능
// Number.prototype -> Object.prototype
const aa = new Number(123.45);

// toFixed 반올림해서 문자열로 반환
const result = aa.toFixed();
console.log(result);
console.log(typeof result);

// 원시값인데???
const bb = 123.56;
// 암묵적으로 래퍼클래스 Number로 변경됨
// 다시 원시값으로 변경됨
console.log(bb.toFixed());