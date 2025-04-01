function solution(a, b, n) {

    var sum = 0;

    while (true) {
        // 받은 콜라개수
        sum = sum + Math.floor(n / a) * b;
        // 빈병
        n = Math.floor(n / a) * b + n % (a);
        if (n < a)
            break;
    }

    return sum;
}

//

console.log(solution(3, 2, 20))