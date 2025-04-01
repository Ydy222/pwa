/* 
 숫자로 이루어진 문자열 t와 p가 주어질 때, 
 t에서 p와 길이가 같은 부분문자열 중에서,
 이 부분문자열이 나타내는 수가 p가 나타내는 수보다
  작거나 같은 것이 나오는 횟수를 return하는 함수 solution을 완성하세요.

 예를 들어, t="3141592"이고 p="271" 인 경우, 
 t의 길이가 3인 부분 문자열은 314, 141, 415, 159, 592입니다. 
 이 문자열이 나타내는 수 중 271보다 작거나 같은 수는 141, 159 2개 입니다.

*/

// 3141592 271 2
// 3141592 3333
// 3141 1415 4159 1592
// 500220839878 7 8
// 5 0 0 2 2 0 8 3 9 8 7 8
function solution(t, p) {
    let count = 0;

    for (let i = 0; i < t.length; i++) {
        const element = t.slice(i, i + p.length);
        if ( element.length == p.length ){
            if( Number(element) <= Number(p) ){
                count++;
            }
        }
    }

    return count;
}

console.log(solution('3141592', '271'));