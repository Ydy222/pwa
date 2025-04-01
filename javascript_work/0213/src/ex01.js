// hello world! -> 글자수 세려서 곱하기 2
function solution(str) {
    console.log(str, str.length);
    return str.length * 2;
}

const ret1 = solution('hello world!');
console.log(ret1);
const ret2 = solution('hell');
console.log(ret2);