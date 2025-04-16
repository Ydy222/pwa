const map = new Map();
const key = { key: 10 };
const key2 = { ...key };

console.log(key === key2);

// map에 {key:10}=>20 추가
map.set(key, 20);
console.log(map);

// map에 {key:10} 가지고 있는지 확인
console.log(map.has(key));

// map에 {key:10} 삭제
// map.delete(key);
map.delete({ key: 10 });
console.log(map);

// map에 NaN=>100 추가
map.set(NaN, 100);
console.log(map);

// map 모든 내용삭제
map.clear();
console.log(map);
