// 교집합
const A = new Set([1, 2, 3, 4]);
const B = new Set([3, 4, 5, 6]);

// filter 반환되는 값이 true 해당요소를 배열로 리턴
const res = [...A].filter((aitem) => B.has(aitem));
console.log(res);

// 합집합
const union = new Set([...A,...B]);
console.log([...union]);

// 차집합
const differ = [...A].filter( aitem => !B.has(aitem));
console.log(differ);