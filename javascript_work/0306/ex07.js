function Person(){}

Person.prototype.doA = function(){
    console.log('doA');
}

const me = new Person();

console.log(me.__proto__);
console.log(Person.prototype);

console.log(Person.prototype === me.__proto__);