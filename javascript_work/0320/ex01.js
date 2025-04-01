function solution(n) {
    if (n < 2) return 0; // 2보다 작은 경우 소수 없음

    let answer = 0;
    const 소수 = new Set();

    for (let i = 2; i <= n; i++) {
        let isPrime = true;
        const sqrtI = Math.sqrt(i); // 제곱근까지만 체크

        for (const element of 소수) {
            if (element > sqrtI) break; // 제곱근 이상이면 더 이상 확인할 필요 없음
            if (i % element === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            소수.add(i);
            answer++;
        }
    }

    return answer;
}