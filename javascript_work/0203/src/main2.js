var a; // undefind 값 할당
console.log(a);
console.log("main2.js");

console.log(aaa);

// 키워드...
// var let const
function aaa(){
  const m= 10;
  console.log("aaa 함수 입니다.");
  console.log(`aaa m = ${m}`);
}

a=10;  // 값의 재할당
console.log(a);
a=20; // 값의 재할당
console.log(a);

aaa();
aaa();
aaa();
aaa();

console.log(m);// 가비지 콜렉터 작동된다..