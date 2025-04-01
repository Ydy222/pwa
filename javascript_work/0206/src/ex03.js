function solution(slice, n) {
    var res = n / slice;
    res = parseInt(res);
    if (n % slice > 0) {
        res = res + 1;
    }
    return res;
}

const result = solution(7, 10);
console.log(`result = ${result}`);