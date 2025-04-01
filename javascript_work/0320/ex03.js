// name은 외부에서 참조 불가능하게
// age 는 외부에서 참조 가능하게

class AA{
    #name
    constructor(name,age){
        this.#name = name;
        this.age = age;
    }

    get name(){
        return this.#name;
    }
}

const aa = new AA("홍길동",20);
console.log(`aa.age ${aa.age}`);
console.log(aa.name);
// console.log(`aa.#name ${aa.#name}`);