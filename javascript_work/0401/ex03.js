console.log(Number.EPSILON);
class AA{
    static MYNUM = 10;

    static doA(){
        console.log('doA');
    }
    doB(){
        console.log('doB');
    }
}

const aa = new AA();
aa.doB();

// static 정적 메서드가 아니라서 호출 X
// 정적 메서드로 바꾸면 가능
AA.doA();
console.log(AA.MYNUM);