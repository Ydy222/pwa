var score = 80;
console.log(score);

score = 90;
console.log(score);

// 10장 함수...

// 함수 선언... f(x) = y
// solution(10);
// 10 20
// '' "" `` <- 문자열.. 
function solution(age) {
  var year = 1985;
  var age = 2022 - 1985+1;
  return `2022년 기준 ${age}살이므로 ${year}년생입니다.`;
}

console.log(`${solution}`);

const result = solution(10);
console.log(result);