
//문자열 my_string과 문자 letter이 매개변수로 주어집니다. 
// my_string에서 letter를 제거한 문자열을 
// return하도록 solution 함수를 완성해주세요.

function solution(mystring, letter) {
    var answer = '';
    for (let i = 0; i < mystring.length; i++) {
        if( mystring[i] !== letter)
            answer = answer + mystring[i];
    }
    return answer;
}

console.log(solution('abcdef', 'f')); // -> abcde
// solution('qwerqwer', 'w'); // -> qerqer

// 문자열은 유사 배열입니다.

// var a = "abcd";
// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);
// console.log(a[3]);

// a[2] = 'F';
// console.log(a);