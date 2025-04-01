/*
22 장 this 오전 동안

// 10분.. this... 반복학습 복습..

1. 전역에서의 this
2. 일반함수에서 this 
    일반모드
    스트릭트모트 -> package.json type:module 자동으로 stirct모드이다.
3. 메서드에서의 this
4. 생성자에서의 this

효율의 높이는 방법
1. 집중력.
2. 간절함.
*/
// 전역에서 this
// 'use strict';
// console.log(this);
// function aa(){
//     // window.document.querySelector();
//     console.log(this);
//     console.log(this.crypto.randomUUID());
// }

// aa();
// 3 메서드에서 this
// const obj = {
//     a:10,
//     doa(){
//         console.log(this);
//         console.log(`a ${this.a}`);
//     }
// }

// obj.doa();

// 옛날방식 javascript 에서 이방식 좋아함
function aaa(){
    console.log(this);
    this.name = "마이네임";
    return this;
}

const a1 = new aaa();
console.log(a1);


// 새로운방식 C#, java 이런곳에서 좋아함.
class AA {
    constructor() {
        console.log(this);
        this.name = "마이클래스네임";

        // return this; 생략되어진 문법
        // return { a: 10, b: 20 }
        return this;
    }
}

const a2 = new AA();
console.log(a2);