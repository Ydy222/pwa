class Person {
    age = 10;// 프로퍼티는 외부에서 선언가능해졌다
    constructor(name) {
        // this = {}
        this.name = name;
        // {name :"lee"}
        // return this;
        return {}
    }

    // consturctor 생략 가능하다 없어도 있는거 처럼 동작한다.
}

const me = new Person("Lee");
console.log(me);