function Person(name, age) {
    this.name = name;
    this.age = age;
}

// 1. Person.prototype 안에는 Person constructor가 원래 있다. 
// Person.prototype.greet = function () {
//     console.log(`hello 나는 ${this.name} 나이는 ${this.age}`);
// }

// 2. constructor가 없어졌다.
Person.prototype = {
    greet(){
        console.log(`hello 나는 ${this.name} 나이는 ${this.age}`);
    }
}

// 3. 하지만 new 연산자로 객체 생성을 하게 되면
// 자바스크립트 엔진이 자동으로 object consructor를 추가 하게 된다.
const p1 = new Person("홍길동", 20);
const p2 = new Person("박길동", 30);

// p1.greet();
// p2.greet();

// 4. constructor 확인시 Obejct를 확인 할 수 있다.
console.log(p1.constructor);
console.log(p2.constructor);