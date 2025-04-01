/*
 문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.
 "abc1Addfggg4556b"	6	["abc1Ad", "dfggg4", "556b"]
 "abcdef123"	3	["abc", "def", "123"]
*/

// 배열을 자를때는 slice 0,6
// 문자열을 자를때는 subString 0,6

// javascript 기본 제공되는 함수들은..
// Array.prototype.slice()
// typeof string -> String
// String.prototype.substring()

function solution(my_str, n) {
    // console.log(my_str.substring(0, n));
    // console.log(my_str.substring(n, n + n));
    // console.log(my_str.substring(n + n, n + n + n));
    // console.log(my_str.substring(n + n + n, n + n + n + n));

    var answer = [];
    let left = 0;
    let right = n;
    while (true) {
        const result = my_str.substring(left, right);
        if (result.length < 1) {
            break;
        } else {
            answer.push(result);
        }
        left = left + n;
        right = right + n;
    }
    return answer;
}

console.log(solution('abc1Addfggg4556b', 6));








