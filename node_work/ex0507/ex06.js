class Human{
    // new 연산자 사용해서 객체 생성시 호출
    constructor(type='human'){
        this.type = type;
        return this;    // 생략 되어진 표현
    }
    // 정적 메서드인 isHuman은 객체 생성하지 않고 사용
    // Math.
    static isHuman(human){
        console.log('인간이다'+human);
    }
    // 내부 메서드 prototype
    // 객체 생성하면 prototype 체인룰에서 생성
    // 개체 생성해서 사용
    brethe(){
        alert('슴하아~~~');
    }
}
class AA extends Human{
    // static isHuman(){  }
}
// const math = new Math();
// math.random();
// Math.random()
const human = new Human();
// const human = {
//     type:'human',
// }
console.dir(human);
Human.isHuman(human);
AA.isHuman(human);
// console.log(human.type);