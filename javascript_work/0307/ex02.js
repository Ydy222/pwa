function Person(name) {
    this.name = name;
}

const me = new Person('lee');

console.log(me.constructor);
console.log(Person);