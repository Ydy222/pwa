/*
두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 
배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다.

 예를 들어 
    두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 
    solution(3, 12)는 [3, 12]를 반환해야 합니다.

    3, 12 -> 최대 공약수 3 , 최소공배수 12

    최소 공배수 공식
    A * B / A와B최대공약수 = 최소공배수
*/

// 3 12 최대공약수
// 임의의숫자 나누었을때 둘다 0
// 임의의숫자가 제일 큰게 최대공약수
function solution(m, n) {
    var answer = [];
    const max = m >= n ? m : n;
    for (let i = 1; i <= max; i++) {
        if (m % i == 0 && n % i == 0) {
            answer[0] = i;
            console.log(i);
        }
    }
    answer[1] = m * n / answer[0];
    return answer;
}

console.log(solution(3, 12));