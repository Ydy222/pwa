// 내 혼자만 알수있게 만들어 놓으면
// 일이 들어온다....

// 2011년도 대구 에서 전자세금계산서
// 28살
// 월화수목금금
// 30살... 
// 230만원.. 70만원... 5년...

const set = new Set([1, 2, 3]);

console.log(set);

// set.add(6) 이거는 반환값이 set입니다.

console.log(set.add(10));

set.add(6).add(6).add(6);

// set.delete(6) 반환값이 set이 아닙니다
console.log(set.delete(3)); // 삭제가 되면 true,삭제가 되지 않으면 false

set.delete(6).delete(6).delete(6);

console.log(set);

// 에러처리 -- 1,000원 + 2,000원 = NaN
// NaN 빈공백으로 0으로 나와야
console.log(NaN === NaN);
// console.log(NaN.isNaN(NaN));

set.add(NaN);
set.add(NaN);

console.log(set);

set.delete(NaN); // NaN 삭제
console.log(set);

set.clear(); // 전부다 삭제
console.log(set);

[1, 2, NaN, 3];
