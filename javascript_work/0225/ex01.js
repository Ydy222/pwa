function solution(n) {
    // n = String(n);
    n = n + '';
    // n = n.toString();

    const sum = n.split('')
        .map(item => Number(item))
        .reduce((a, b) => a + b, 0);

    // forEach map filter reduce
    // const arr = n.split('');
    // console.log(arr);

    // const brr = arr.map(item => Number(item));
    // console.log(brr);

    // const sum = brr.reduce((a, b) => { 
    //     console.log(a);
    //     console.log(b);
    //     return a + b;
    // }, 0);
    return sum;
}
// 1234 => 10
// 5631 => 5+6+3+1 = 15
// 11021 => 1+ 1+ 0+ 2+ 1 = 5
const ret = solution(1234);
console.log(ret);