// super 키워드는 일반함수 function AA{} <- 이곳에서는 없는 문법
// super, extends 키워드는 오직 class 에서 사용가능함.
class A {
    constructor(aa, bb) {
        this.aa = aa;
        this.bb = bb;
    }
    doA(){
        console.log("A 클래스 안에 있는 doA 메서드")
    }
}
class B extends A{
    constructor(aa,bb,cc){
        super(aa,bb);   // super 상위 객체의 constructor
        this.cc = cc;
    }
    doA(){
        super.doA();
        console.log("B 클래스 안에 있는 doA 메서드");
    }
}
const me = new B(10,20,30);
console.log(me);
me.doA();