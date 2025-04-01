/*
문자열 s는 한 개 이상의 단어로 구성되어 있습니다.
 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 
 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

제한 사항
문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.

"try hello world"	"TrY HeLlO WoRlD"

*/
function solution(s) {
    var answer = '';
    s= s.toLowerCase();
    const s_s = s.split(" ");
    // console.log(s_s);
    // const s_s = s.split(/\s+/);
    // console.log(s_s);
    for (let i = 0; i < s_s.length; i++) {
        // console.log(`s_s[${i}] ${s_s[i]} length = ${s_s[i].length}`);
        const spiltStr = s_s[i];
        for (let j = 0; j < spiltStr.length; j++) {
            if (j % 2 == 0) {
                answer += spiltStr[j].toUpperCase();
            } else {
                answer += spiltStr[j];
            }
        }
        if ((s_s.length-1) != i)
            answer += " ";
    }
    return answer;
}
console.log("try   hello   world   ".length);
console.log(solution("try   hello   world   ").length); // "TrY HeLlO WoRlD"
console.log(solution("try   hello   world   ")); // "TrY HeLlO WoRlD"
console.log("try hello world".length);
console.log(solution("try hello world").length); // "TrY HeLlO WoRlD"
console.log(solution("try hello world"));
console.log("a          a    ".length); // "TrY HeLlO WoRlD"
console.log(solution("a          a    ").length); // "TrY HeLlO WoRlD"
console.log(solution("a          a    ")); // "TrY HeLlO WoRlD"