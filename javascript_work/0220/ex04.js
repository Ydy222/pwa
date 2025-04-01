/*
    h1.addEventLiteser('click',function(){})
*/
function test(x, y, z) {
    console.log(x)
    console.log(y);
    console.log(z);

    for (var i = 0; i < x; i++) {
        y();
    }
}

// 콜백함수는 매개변수를 함수로 보내는거
// 원시값, 함수, 객체
test(
    3,
    function () { console.log('yy') },
    { a: 10, b: 20 }
);