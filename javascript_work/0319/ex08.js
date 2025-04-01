class Person{
    name = "lee";
    // 인스턴스 변수 prototype
    getName = function(){
        return this.name;
    }
    // prototype 들어가는 메서드
    aa(){}
}

const me = new Person();
console.log(me);
console.log(me.getName());