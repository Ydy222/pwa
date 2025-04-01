/*
문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요.
예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

/^\d+$/
^ -> 문자열시작을 의미
\d+ 숫자 0~9하나 이상
$ 문자열의 끝을 의미
즉 전체 문자열이 숫자로만 이루어져있는지 확인하는 정규 표현식

/^[A-Za-z0-9]+$/
^ → 문자열의 시작
[A-Za-z0-9] 영문 대소문자(A-Z, a-z)와 숫자(0-9) 허용
+ → 1개 이상 반복 가능
$ → 문자열의 끝
*/

function solution(s) {
    const re = /^[A-Za-z0-9]+$/;
    return re.test(s) && (s.length == 4 || s.length==6);
}

console.log(solution('1234aaa'));