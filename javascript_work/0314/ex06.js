// 이렇게 개발 하면 되는거 아냐??'
// 문제가???
// 어떤 특정 함수에만 이 역활을 할 수 있도록 부여했다

// 이것은 num이 다시 초기화 되기 때문에 사용불가
const before_incre = function(){
    let num = 1;
    num++;
    console.log(num);
};

// 즉시 실행함수로 만들면서 함수리턴 하는 식
// 클로저 함수 생성
const incre = (function(){
    let num = 1;
    return function(){
        num++;
        console.log(num);
    }
})();

incre();
incre();
incre();

// console.log(++num);
// console.log(num);