// 고차함수 

// forEach 
// 반환값이 없는거...
// map filter reduce
// 반환값이 있는 것...
// 콜백함수의 변수명은 개발자가 네이밍 규칙으로 짓는 것

// const result1 = [1, 2, 3].forEach((qwer, i, arr, q, w) => {
//     console.log("화살표 함수 forEach " + qwer);
//     console.log(`index = ${i}`);
//     console.log(`arr = ${arr}`);
//     console.log(`q = ${q}`);
// });
// console.log(result1);
// map 1,2,3 이기 때문에 3번 돌아가는데 반환되는 값을
// 배열로 만들어 준다.
// 1,2,3 -> 2,4,6
// const result2 = [1, 2, 3].map((qwer, i, arr, q, w) => {
//     console.log("화살표 함수 map " + qwer);
//     console.log(`index = ${i}`);
//     console.log(`arr = ${arr}`);
//     console.log(`q = ${q}`);
//     return qwer*2;
// });
const result2 = [1, 2, 3].map(qwer => qwer * 2);
console.log(result2);