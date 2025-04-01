function add(x, y) {
    // 만약에 number 가 아니면
    if (typeof x !== 'number') {
        // 에러를 강제로 발생 시켜라
        // throw new TypeError('x y 는 숫자 이어야 합니다.')
        x = 0;
    } 
    // 아니면 만약에 y가 number가 아니면
    else if (typeof y !== 'number') {
        y = 0;
    }
    return x + y;
}

console.log(add(2));
console.log(add('a', 'b'));

console.log("끝까지 진행");