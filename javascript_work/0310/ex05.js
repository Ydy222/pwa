function AA() { }
AA.doA = function () {
    console.log("정적 메서드 doA");
}
const test = new AA();
AA.doA();   // 정적 메서드 호출
// test.doA(); // test 인스턴스안에는 doA() 함수 없음.

// 개발자가 직접 정적 메서드를 생성하는 경우는 거의 없지만

// 자스에서 대표적인 정적 메서드는
// Math.ceil Math.floor Math.round 등이 정적메서드
// Math 객체 ceil 정적메서드 floor 정적메서드 round 정적메서드

// const math = new Math()로 생성해서 사용하지 않고
// math.ceil();
// Math.XXX로 바로 사용함.
console.log(Math.ceil(10.5));
console.log(Math.floor(10.5));
console.log(Math.round(10.5));

// 랜덤한숫자 0< x <1
// 피파 
console.log(Math.random());
console.log(Math.random());