const obj = { name: "홍길동", addr: "서울" };
const obj2 = {};

obj2.name = obj.name;
obj2.addr = obj.addr;

obj.name = "최길동";

console.log(obj);
console.log(obj2);