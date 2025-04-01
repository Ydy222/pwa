class MyArray extends Array {
    uniq() {
        const MyArr = new Set(this);
        console.log('유니크 '+ [...MyArr]);
    }
    average() {
        const result = this.reduce((a, b) => {
            // console.log(`a ${a}`);
            // console.log(`b ${b}`);
            return a + b;
        });
        console.log('평균' + result / this.length);
    }
}

const arr = new MyArray(10, 20, 30, 30, 40);
// [10, 20, 30, 30, 40];
// 객체 생성하는 방법은 
// 1.문자리터럴 방식 2.new 예약어 사용하는방식
console.log(arr);
// 중복제거 함수 X
const uniqArr = arr.uniq();
// 평균값 함수 X
const avg = arr.average();