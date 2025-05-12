// 0,1,1,2,3,5,8,
/*
const infiniteFibona = (function () {
  let [pre, cur] = [0, 1];
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      [pre, cur] = [cur, pre + cur];
      return { value: cur };
    },
  };
})();
*/
const infiniteFibona = (function* () {
  let [pre, cur] = [0, 1];
  while (true) {
    [pre, cur] = [cur, pre + cur];
    yield cur;
  }
})();

for (const num of infiniteFibona) {
  if (num > 10000) break;
  console.log(num);
}
// console.log(infiniteFibona);
// console.log(infiniteFibona.next());
// console.log(infiniteFibona.next());
// console.log(infiniteFibona.next());
