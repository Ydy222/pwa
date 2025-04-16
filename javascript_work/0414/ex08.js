Set.prototype.aa = function () {
  console.log("test");
};

// 원래 있는 메서드를 덮어 씌우서 바꾸기(재정의 == override)
// 재정의는 영어로 override라고 한다.
// Set.prototype.intersection = function (set) {
//   const res = new Set();
//   console.log("this = ");
//   console.log(this);
//   console.log("set = ");
//   console.log(set);
//   for (const setElement of set) {
//     if (this.has(setElement)) res.add(setElement);
//   }
//   return res;
// };
// select * from todos union select * from users;
Set.prototype.intersection = function (set) {
  return [...this].filter((item) => set.has(item));
};
Set.prototype.union = function (set) {
  return new Set([...this, ...set]);
};

const setA = new Set([1, 2, 3]);
const setB = new Set([2, 3, 4, 5]);

console.log("aa" in setA);
console.log("intersection" in setA);

console.log("res = " + [...setA.intersection(setB)]);
console.log("res = " + [...setA.union(setB)]);
