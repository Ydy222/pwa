// function Person(name){} 
// Person.prototype 소유하고있다. -> constructor 생성자가 있습니다. constructor 생성자

// const Person = name =>{
//     this.name = name;
// }
 // Person.prototype 소유하고 있지 않다 -> constructor가 없다.

// console.log(Person.prototype);
// console.dir(Person.prototype);

// new Person();

class Person{
    // new 를 사용하게 되면 constructor 자동으로 실행
    constructor(){
        this.x = 10;
        this.y = 20;
        console.log("test");
    }
}

const p1 = new Person();
console.log(p1);

// new 라는 예약어를 사용 해서 객체 생성 {}
// constructor 자동으로 호출한다.

function aa(){} // aa.prototype constructor 숨어 있어...

aa.prototype.x = 10;
aa.prototype.y = 20;

const test = new aa();