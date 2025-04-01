/*
    0~100

    var let const 
    var 옛날꺼
    let const 최신꺼
    let 변경가능
    const 변경불가
*/
const a = 10;
// a = 20;

let b = 20;
console.log(b);
b = 30;
console.log(b);

//  제일처음값(초기값)i=0 ; 조건i<10 ; 변경되는값 i++
for (let i = 0; i < 10; i = (i + 1) * 2) {
    console.log(i);
}