// 일급 객체
// 1. 변수에 함수 넣을수 있다.
// 2. 객체에 함수 넣을수 있다.
// 3. 매개변수로 함수 넣을수 있다.
// 4. 반환값으로 함수 할수 있다.

const fn1 = function doA(num) {
    console.log('doA ' + num);
    return num + 1;
}

const obj = {
    fn1,
}

// obj.fn1();
// 3. fff 매개변수에 함수 할당.
// 4. 반환값으로 함수를 가질수 있다.
function makeFn1(fff) {
    let num = 0;
    return function () {
        num = fff(num);
        console.log(num);
    };
}

const aaa = makeFn1(obj.fn1);
// console.log(aaa);
aaa();
aaa();
aaa();
aaa();