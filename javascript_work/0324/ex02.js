class Animal {
    constructor() {
        this.a = 10;
        this.doB = ()=>{ console.log("doB") };
        console.log("Animal");
    }
    doA(){
        console.log("animal.doA()");
    }
}

class Dog extends Animal {
    constructor() {
        super(); // constuctor 작성시 생략불가
        this.b = 20;
        console.log("Dog");
    }
}

const dog = new Dog();
console.log(dog);
dog.doA();