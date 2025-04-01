function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.print = function (){
    console.log(`name = ${name} age = ${age}`)
}

const p1 = new Person('홍길동', 20);
const p2 = new Person('박길동', 30);
const p3 = new Person('이길동', 30);

console.log(p1.print === p2.print)
console.log(p2.print === p3.print)