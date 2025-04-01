// const sorted = (a, b) => {
    // if (a < b) return 1;
    // if (a == b) return 0;
    // if (a > b) return -1;
    // return a - b;
// }
const sorted = (a, b) => a - b;
const arr = [1, 2, 4, 2, 10];
// console.log(arr.sort(sorted));
console.log(arr.sort((a, b) => a - b));

// 사전편찬순으로 진행
const brr = ['aa', 'cc', 'bb'];
console.log(brr.sort());

// sort 함수 규칙
// sort 안에 고차 함수를 넣을때는
// a,b 파라메타를 받아와서
// a>b 양수 리턴
// a==b 0 리턴
// a<b 음수 리턴