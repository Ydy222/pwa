const person = {
    name: 'lee',
    getName() {
        return this.name;
    }
}

// console.log(person.getName());

const a1Person = {
    name: 'Kim'
}

a1Person.getName = person.getName;

console.log(a1Person.getName());

const cc = person.getName;
console.log('일반함수로 호출될때는 this가 전역객체 ' + cc());