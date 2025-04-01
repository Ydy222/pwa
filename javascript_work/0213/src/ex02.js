var a = "qwer" / 2;
var b = NaN;

console.log(a);
console.log(a === b);

console.log(Number.isNaN(a));
console.log(Number.isNaN(b));

// var Number = {
//     isNan(number){
//
//     }
// }

// 제어문 함수호출 객체
var a = 10;

var c = {
    a: 10,
    b : function() {
        for (; ;) {
            console.log(this.a);
        }
        console.log('b함수입니다.');
    },
    c: { a:1 }
}

// c.b();
console.log(c.c.a);











