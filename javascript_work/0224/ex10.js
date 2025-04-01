const o = {};
o.name = 'lee';
o.age = 20;

console.log(o);

console.log('==============');

const 디스크립터 = Object.getOwnPropertyDescriptor(o,'name');
console.log(디스크립터);

console.log('==============');

const 디스크립터s = Object.getOwnPropertyDescriptors(o);
console.log(디스크립터s);