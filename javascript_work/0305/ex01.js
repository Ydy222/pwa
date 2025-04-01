function solution(bin1, bin2) {
    const arr = Number(bin1).toString().split('');
    const brr = Number(bin2).toString().split('');

    let num1 = 0;
    for (let i = arr.length - 1, j = 0; i > -1; i--, j++) {
        num1 = num1 + arr[i] * (2 ** j);
    }
    console.log(`10진수로 num1 = ${num1}`);

    let num2 = 0;
    for (let i = brr.length - 1, j = 0; i > -1; i--, j++) {
        num2 = num2 + brr[i] * (2 ** j);
    }
    console.log(`10진수로 num2 = ${num2}`);

    let result = num1 + num2;
    console.log(`resutl = ${result}`);

    let mod = '';

    do {
        mod = result % 2 + mod;
        result = Math.floor(result / 2);
    } while (result > 1);

    console.log(`result = ${result}`);
    console.log(`mod = ${mod}`);
    var answer = result + mod;
    if(bin1==='0' && bin2==='0')
        answer = '0';
    return answer;
}

const ret = solution('0', '0');
console.log(ret);