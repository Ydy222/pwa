function Person(name){
    this.name = name;
}

Person.prototype.sayHi = function(){
    console.log(`hi ${this.name}`);
}

const me = new Person('Lee');
me.sayHi();

const you = new Person('Park');
you.sayHi();