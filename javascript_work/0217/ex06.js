// 'abc' 5
// aaaaabbbbbccccc

// abc 2
// aabbcc

// abc 3
// aaa bbb ccc

// str abc
// number 3
// return aaabbbccc
// 배열 str[0] str[1] str[2]
function solution(str, number) {
    let answer = '';
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < number; j++) { 
            answer = answer + str[i];
        }
    }
    return answer;
}

const res = solution('abc', 3);
console.log(res);