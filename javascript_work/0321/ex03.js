class AA {
    // super X constructor 존재한다
    doA = function () { 
        console.log("일반함수");
    }
    // super 사용가능 constructor 존재 X
    doB() {
        console.log("메서드함수")
    }
    // super X constructor 존재 X
    doC = ()=>{
        console.log("화살표함수")
    }
}

const aa = new AA();
aa.doA();
aa.doB();
aa.doC();