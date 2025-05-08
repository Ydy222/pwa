const a = null;
console.log(a || 3);
console.log(a ?? 3);

const c = null;

console.log(c?.d);
// 에러 발생 TypeError null안에 d가 없어서 읽을수 없다
// 프로그램 강제 종료
console.log(c.d);
