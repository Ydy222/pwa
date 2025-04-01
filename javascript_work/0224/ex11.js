const person = {
    // 데이터 프로퍼티
    name: '홍길동',
    age: 20,

    // 접근자 프로퍼티
    get nameAge() {
        return `name = ${this.name} age = ${this.age}`;
    },

    set nameAge(arg) {
        this.name = arg.name;
        this.age = arg.age;
    }
};

const property1 = Object.getOwnPropertyDescriptor(person,'name');
console.log(property1);

const property2 = Object.getOwnPropertyDescriptor(person,'nameAge');
console.log(property2);

for (const key in person) {
    console.log(key);
}

// console.log(person);
// console.log(person.nameAge);

// person.nameAge = { name: "김길동", age: 30 };
// console.log(person.nameAge);

// console.log(person.name);
// console.log(person.age);