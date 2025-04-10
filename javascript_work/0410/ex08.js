// 객체 배열 참조타입이라서...
// 참조하는거 여러개 복사..
const obj = { a: 10, b: 20 };
const copy = obj;
const copy2 = copy;

// react-> 
// useMemo()
// useCallBack()

// 원시는 복사됨..
const a = 10;
const b = a;

obj.a = 30;
console.log(obj);
console.log(copy);
