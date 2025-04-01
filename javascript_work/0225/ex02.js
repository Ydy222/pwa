// 데이터 프로퍼티 어튜리뷰트
const obj = { name:'Alice' };

const desc = Object.getOwnPropertyDescriptor(obj,'name');
console.log(desc);

Object.defineProperty(obj,'age',{
    value :20,
    writable : true,
    enumerable : false,
    configurable : false
})

delete obj.name;
delete obj.age;

obj.age = 30;

console.log(obj.name);
console.log(obj.age);

console.log('------------------------------')
for (const key in obj) {
    console.log(key);
}