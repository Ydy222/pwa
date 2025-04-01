function solution(n) {
    // n = 10;
    var answer;
    for (var i = 0; i <= n; i = i + 2) {
        console.log(i);
        // console.log(answer);
        answer = answer + i;
    }
    answer = 0;
    return answer;
}

const value = solution(10);
console.log(value);

const value2 = solution(4);
console.log(value2);