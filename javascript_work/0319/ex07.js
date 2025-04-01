// 객체의 프로퍼티 종류는
// 데이터 프로퍼티와 접근자 프로퍼티가 있다.
class Person {
    // 데이터 프로퍼티 예시
    constructor(fName, lName) {
        this.fName = fName;
        this.lName = lName;
    }
    // 접근자 프로퍼티 예시
    get fullName() {
        return `fname ${this.fName} lName ${this.lName}`;
    }
    set fullName(name) {
        [this.fName, this.lName] = name.split(" ");
    }
}
const person = new Person("홍", "길동");
console.log(person);
console.log(person.fullName);

person.fullName = "박 길동";
console.log(person.fullName);
