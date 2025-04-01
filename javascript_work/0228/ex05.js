const obj = {
    age :20,
    name :'홍길동',
    aa: function (){ console.log('aa')},
    get fullName(){
        return `이름 ${this.name} 나이 ${this.age}`;
    }
}

console.log(obj.toLocaleString());
console.log(obj.hasOwnProperty('age'));
console.log(obj.hasOwnProperty('aasdkjanslkdjnge'));
console.log(Object.hasOwnProperty('prototype'));

// console.log(Object.getOwnPropertyDescriptors(obj));

// 내부슬롯 [[prorototype]]
function aa(num,num){
    console.log('test');
}

// console.log(aa.length);
// console.log(aa.prototype);
// console.log(aa.[[prototype]]);
// console.log(aa.__proto__);

// if while for 1차
// 함수 매개변수 반환값 2차 // 3월..
// 클래스 3차 prototype

// console.log(Object.getOwnPropertyDescriptors(aa));
// js 엔진 제공해주는 이미 내장되어진 객체 Object{ prototype : { get __proto__ } }
// console.log(Object.prototype);
// console.log(Object.getOwnPropertyDescriptor(Object.prototype,'__proto__'));