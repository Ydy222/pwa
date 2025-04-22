const obj = {a:10,b:20,c:30};
const map = new Map(Object.entries(obj));

console.log(map);

const mapToObj = Object.fromEntries(map);
console.log(mapToObj);

// map 이 객체보다 속도가 조금 더 빠르고 size
// 반복자 사용가능