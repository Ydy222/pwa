class AA{
    static doA(){
        console.log('정적메서드 예시');
    }
}

AA.doA();

// javascript 에서 이렇게 만들지 않았을까?
class Promise{
    constructor(url){
        this.url = url;
    }
    static resolve(){
        const xhr = new XMLHttpRequest();
        
    }
}