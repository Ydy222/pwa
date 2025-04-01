// ? 옵셔널체이닝
// ?? null 병합연산자

var a =undefined;
var b = a ?? '기본 문자열';

console.log(b);

var c = '';
var d = c ?? '기본 문자열';

console.log(`d =${d}`);