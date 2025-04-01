// 1. continue
// 1. 홀수만 출력

// 1~9까지 for
// 1,3,5,7,9
// 1,2,3,4,5,6,7,8,9
// win + ; 이모지 출력
for (let i = 1; i < 10; i++) {
    if (i % 2 == 0) continue;
    if (i % 3 == 0) continue;
    console.log(`i = ${i}`);
}
// 2. break  == 6 최소 break 
// 2의 배수와 3의 배수인 경우 최소 공배수 인 경우 break
// 1,2,3,4,5,6,7,8,9
for (let i = 1; i < 10; i++) {
    if (i % 2 == 0 && i % 3 == 0) {
        console.log(`최소 공배수 i = ${i}`);
        break;
    }
    // console.log(i);
}