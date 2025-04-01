// 상속관계
// 부모클래스 자식클래스
// phone -> 스마트폰 
class Phone {
    constructor(number, brand) {
        this.number = number;
        this.brand = brand;
        console.log(this);
    }
}
class SmartPhone extends Phone {
    constructor(number, brand, internet) {
        super(number, brand);
        this.internet = internet;
        console.log(this);
    }
}
// const phone = new Phone("010-4321-4321", "LG");
const smartPhone = new SmartPhone("010-1234-1234", "삼성", true);

// console.log(phone);
// console.log(smartPhone);

// console.log(Object.getPrototypeOf(phone));
// console.log(Object.getPrototypeOf(smartPhone));