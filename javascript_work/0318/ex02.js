function Person(name, age) {
    this.name = name;
    let _age = age; // 캡슐화 정보은닉

    this.sayHi = function () {
        console.log(` this.name ${this.name} _age ${_age}`);
    }
    // 특정 함수를 통해서만 _age 설정가능
    this.setAge = function (age) {
        if (age < 0) {
            console.log("적용불가");
        }
        _age = age;
    }

}

const me = new Person("Lee", 20);
me.sayHi();
me.setAge(-100);

// 적절치 못한 접근을 막은 거라고 생각할 수 있어요.
// me.name = "안녕하세요 저는 박명횝니다.";
// me._age = -100;

const you = new Person("Kim", 30);
you.sayHi();

console.log(`me.name = ${me.name}`);
console.log(`me._age = ${me._age}`);