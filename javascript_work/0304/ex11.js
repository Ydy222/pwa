if (true) {
  let blockVar = "블록 스코프 변수";
  const blockConst = "블록 스코프 상수";
  console.log(blockVar);   // "블록 스코프 변수" 출력
  console.log(blockConst); // "블록 스코프 상수" 출력
}

console.log(blockVar);   // 오류: blockVar is not defined
console.log(blockConst); // 오류: blockConst is not defined
