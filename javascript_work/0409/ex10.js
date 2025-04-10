// 0,1,1,2,3,5,8,13 피보나치 수열

// function useState(item){
//     return [item, function () {}];
// }
const fibo = function (max) {
  // Symbol.iterator 규칙이 깨짐
  let [pre, cur] = [0, 1];

  return {
    [Symbol.iterator]() {
      // const [myNum, setMyNum] = useState(10);
      return {
        next() {
          // 0, 1 , 1 , 2, 3, 5, 8
          [pre, cur] = [cur, pre + cur];
          return { value: cur, done: cur > max };
        },
      };
    },
  };
};
for (const element of fibo(30)) {
  console.log(element);
}

// const iter = fibo[Symbol.iterator]();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
