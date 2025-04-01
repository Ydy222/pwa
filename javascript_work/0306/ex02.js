// 함수도 객체이다
function Person(name,age){
    this.name = name;
    this.age = age;
    // this.print = function(){
    //     console.log(`name = ${name} age = ${age}`);
    // }
}

console.log(Person.prototype);
Person.prototype.print = function(){
    console.log(`name = ${this.name} age = ${this.age}`);
}
console.log(Person.prototype);

const p1 = new Person('홍길동',20);
p1.print()
const p2 = new Person('박길동',30);
p2.print()
const p3 = new Person('이길동',40);
p3.print()

console.log(p1.print === p2.print);
console.log(p2.print === p3.print);

// console.log(p1.toString());
// console.log(Person.length);