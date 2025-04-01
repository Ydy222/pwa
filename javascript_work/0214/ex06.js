var a = 80;
var b = a;

a = 100;

console.log(a);
console.log(b);

// 객체의 깊은 복사를 해보세요

var c = {x:10};
var d = c;

c.x = 20;

console.log(c);
console.log(d);
