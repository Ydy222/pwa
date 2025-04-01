function solution(n, m) {
    var answer = [];
    const max = n >= m ? n : m;
    for (let i = 1; i <= max; i++) {
        if (n % i == 0 && m % i == 0)
            answer[0] = i;
    }
    answer[1] = n * m / answer[0];
    return answer;
}
console.log(solution(3, 12));

