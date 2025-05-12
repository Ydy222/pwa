console.log(Math.abs(-5));
console.log(2 ** 3);
console.log(Math.cbrt(27));

// 0~1
// 0.00000009 ~ 0.99999999
// *50
// 0.00000049999 ~ 49.9999995
// Math.trunc()
// 0 ~ 49
// +50
// 50 ~ 99

// 50~100 난수를 만들어달라. 52,90,75,83
// console.log(Math.trunc(Math.random()*50)+50);
function getNumber(min, max) {
  return Math.trunc(Math.random() * (max - min)) + min;
}

// 최소~ 최대 몇까지 난수를 만들어달라
for (let i = 0; i < 15; i++) console.log(getNumber(1, 47));
