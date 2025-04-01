function solution(n) {
    var answer = 0;
    const 소수 = new Set();
    a: for (let i = 2; i <= n; i++) {
        let count = 1;
        if (i === 2) { answer++; continue; }; // 2는 유일한 짝수 소수
        if (i % 2 == 0) continue;
        const sqrtI = Math.sqrt(i);

        for (const element of 소수) {
            if (i % element == 0) {
                continue a;
            }
            // if (element > sqrtI) continue a; // 제곱근 이상이면 더 이상 확인할 필요 없음
        }

        for (let j = 3; j <= i; j += 2) {
            if (i % j == 0) {
                count++;
                // console.log("count 증가됨", count);
            }
            if (count > 2) {
                // console.log('소수아님 ' + i);
                break;
            }
        }
        if (count === 2) {
            answer++;
            // console.log(`소수로 추가됨 ${(i)}`);
            소수.add(i);
        }
    }
    return answer;
}
// 2,3,5,7
console.log(solution(10));