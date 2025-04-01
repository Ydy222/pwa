console.log(Car);
// var a;
// console.log(a);
// a = 10;
class Car {
    constructor(name,type){
        this.name = name;
        this.type = type;
    }

    drive(){
        console.log(`${this.name} ${this.type}`);
    }
    static doA(){
        console.log("정적 메서드 입니다.");
    }
}
const car = new Car("K5","하이브리드");
console.log(car);
car.drive();

// car.doA();  // 생성된 참조 변수로는 정적메서드 호출 불가
Car.doA(); 