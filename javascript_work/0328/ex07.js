const arr = [1, 2, 3, 4, 5];
const result = arr.reduce((a, b, index, values) => {
    console.log(`a = ${a} b=${b} index=${index} values=${values}`);
    return a + b;
})

console.log(`result = ${result}`)

// sort 정렬 
// forEach 반환값없음 수행
// filter true false 배열 반환
// map 요소 변경해서 반환
// reduce 하나의 값으로 변경해서 반환