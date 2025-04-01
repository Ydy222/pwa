function solution(num_list) {
    var answer = [0, 0];

    for (let i = 0; i < num_list.length; i++) {
        console.log(num_list[i]);
        if (num_list[i] % 2 == 0) {// 짝수인상황
            // answer[0] = answer[0] ?? 0;
            answer[0] = answer[0] + 1;
        } else {
            // answer[1] = answer[1] ?? 0;
            answer[1] = answer[1] + 1;
        }
    }

    return answer;
}

console.log(solution([1, 2, 3, 4, 5]));
// console.log(solution([1,3,5,7]));