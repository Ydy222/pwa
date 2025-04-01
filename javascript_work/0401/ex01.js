// 배열앞에 넣는거 뒤에 넣는거
const arr = [1, 2, 3, 4, 1, 1, 1, 2, 2, 2];
arr.push(1, 2);
console.log(arr);

arr.unshift(-1, 0);
console.log(arr);

const last = arr.pop();
console.log(last);
console.log(arr);

const first = arr.shift();
console.log(first);
console.log(arr);

arr.splice(2, 1, 10);
console.log(arr);

// map 배열의 내용 바꿈
// reduce 배열을 한개의 자료형 변경
const brr = arr.map((element) => {
  return `<li>${element * 2}</li>`;
});

console.log(brr);

const obj = arr.reduce((a, b) => {
  //   console.log(a);
  //   console.log(b);
  a.name = "홍길동";
  // [ 0, 1, 10, 3, 4, 1 ]
  // { 0:1, 1:2, 10:1, 3:1, 4:1}
  //   console.log(a[b]);
  //   console.log(`b ${b}`);
  //   console.log(`a[b] ${a[b]}`);
  a[b] = a[b] != undefined ? a[b] + 1 : 1;
  return a;
}, {});

console.log(obj);
