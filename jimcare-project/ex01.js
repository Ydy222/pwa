function solution(numer1, denom1, numer2, denom2) {
    // 1/2 + 3/4
    // 8,9의 최소공배수
    // 8 16 24 32 40 48 56
    // 9 18 27 36 45 54
    var lcm = denom1 > denom2 ? denom1 : denom2;
    while (true) {
        if (lcm % denom1 == 0 && lcm % denom2 == 0) {
            break;
        }
        lcm++;
    }
    let 분자 = lcm / denom1 * numer1 + lcm / denom2 * numer2;
    let 분모 = lcm;
    let test = 2;
    let mod = 1;
    while(lcm>=test){
        if(분자%test==0 && 분모%test==0){
            mod = test;
        }
        test++;
    }
    return [ (lcm / denom1 * numer1 + lcm / denom2 * numer2)/mod, lcm/mod];
}

console.log(solution(13, 70, 20, 22));