// const p1 = {
//     name: '홍길동',
//     age: 20
// }
// const p2 = {
//     name: '박길동',
//     age: 30
// }
function aa(name, age) {
    this.name = name;
    this.age = age;
    console.log('호출');
    // this를 리턴하지 못함
    // 빈객체 {} 리턴
    // return {};
    // 자동이다
    // return this;
}
// 객체에서 데이터 프로퍼티 
// name age
// 접근자 프로퍼티
// get set 

// 내부슬롯 내부메서드 직접적으로 호출 불가
// [[prototype]]
console.log(`aa.constructor = ${aa.constructor}`);

const temp = aa();
const temp2 = new aa('홍길동', 20);
console.log(temp);
console.log(temp2);

console.log('-------------------')
// 내부메서드 [[construct]] 가 없기 때문에 new 생성자로 
// 호출 불가
// react node
const bb = () => { }
console.log(bb.constructor);
// new bb();