//map 을 성능 아주 조금 빠른 편
const obj = {
  aa: 10,
};

const map = new Map();
map.set("aa", 10);

console.log(obj);
console.log(map);

console.log(obj.aa);
console.log(map.get("aa"));

obj.bb = 20;
obj.cc = () => {};
// obj.{aa:10} = 20;
map.set({ aa: 10 }, 20);

console.log(obj);
console.log(map);

// 속성이 몇개 있냐
console.log(Object.keys(obj));
console.log(['aa','bb','cc'].length);
console.log(map.size);

// set.size
console.log(...map);

// 객체에만 추가 2021년 stage4 제안되었다
// 2025년도 표준안
// 표준 => 모든 곳에서 다 허용된다.
console.log({...obj});