// const a = "abcdef";
//
// const b = a.indexOf('a');
// console.log(b);

function solution(str1, str2) {
    const test = str1.indexOf(str2);
    console.log(test);
    if( test === -1 ){
        return 1;   // 함수 종료 1을 반환한다
    }
    else{
        return 2;
    }
}

const res = solution('ab6CDE443fgh22iJKlmn1o','CDE');
console.log(res);