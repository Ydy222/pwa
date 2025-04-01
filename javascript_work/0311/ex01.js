/*
알파벳 대소문자로만 이루어진 문자열 my_string이 주어질 때,
 my_string에서 'A'의 개수, my_string에서 'B'의 개수,..., 
 my_string에서 'Z'의 개수, my_string에서 'a'의 개수, 
 my_string에서 'b'의 개수,..., 
 my_string에서 'z'의 개수를 순서대로 담은 길이 52의 정수 배열을 return 하는 solution 함수를 작성해 주세요.
 */
function solution(my_string) {
    var comp = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
        'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    // new Array() function Array() <- 첫글자 대문자로 쓰는게 일반적이다.
    // Array.prototype -> fill 함수..
    // push pop slice 
    const answer = new Array(comp.length).fill(0);
    // comp[0] = 'A' -> my_string[0~10]
    for (let i = 0; i < comp.length; i++) {
        for (let j = 0; j < my_string.length; j++) {
            if(comp[i]==my_string[j])
                answer[i] = answer[i]+1;
        }
    }
    return answer;
}

console.log(solution('Programmers'));