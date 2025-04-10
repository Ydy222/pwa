const arr = [1, 2, 3, 4, 5];

console.log(Math.max(arr));
console.log(Math.max(10, 20, 30, 40));

// Fuction.prototype
// apply(this,파라메타배열)
// call(this,스프래드 배열)
// bind 함수호출 this 정의 할수 있는거

const apMax = Math.max.apply(null, arr);
console.log(apMax);

const caMax = Math.max.call(null, arr);
console.log(caMax);

const caMax2 = Math.max.call(null, 1, 2, 3, 4, 5);
console.log(caMax2);
