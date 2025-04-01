function aa() {
    // 'use strict'

    var a = 10;
    console.log(`a = ${a}`);

    // vs code가 실행하기 이전에 에러를 알려줌
    // 그래서 개발자의 실수가 줄어든다..
    // ms

    delete a;
    console.log(`a = ${a}`);
}

aa();