/*
    this 예시
    1. aa(); // this 전역객체 
    // strict모드이면 -> this는 undefined로 할당된다
    2. new aa(); // this {} 생성하는 객체
    3. person.aa(); // person-> this입니다.
    4. <tr onclick='aaa(this)'></tr> 여기에서 this는 trTag가 됩니다.
    5. 화살표함수의 this는 상위객체를 가리킨다. 
*/

// 문법을 엄격하게 검사하는 기법 사용을 잘 안해요...
'use strict';

function AA(name){
    // this.name = name;
    console.log(this);
}

// 일반함수호출
AA();
// new AA();
new AA("PARK");

// aa가 this로 할당된다.
const aa = {
    name:"LEE",
    getThis (){
        console.log(this);
    }
}
// aa
aa.getThis();

const bb = aa.getThis;
bb();