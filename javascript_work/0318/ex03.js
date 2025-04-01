// # <- Person 클래스 내부에서는 사용가능
// # 외부에서는 접근 하는 순간 에러..
// 캡슐화 정보은닉 es2022 2025 2030
// 회사가 오래되었을수록.. 오래된 개발자가...
class Person {
    #age; // 접근이 허용되지 않는 
    constructor(name, age) {
        this.name = name;
        this.#age = age;
    }
    sayHi() {
        console.log(`this.name ${this.name} this.#age ${this.#age}`);
    }
}

const me = new Person("Lee", 30);
me.sayHi();

console.log(me.name);
// es2022?? 에서 나온거 같아요 자동차 기름을 왜 써요?? 전기...?
// console.log(me.#age); // 접근허용 X 하지 않기 떄문에 에러 발생