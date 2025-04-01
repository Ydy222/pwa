// [1, 2, 100, -99, 1, 2, 3]	[2, 4, 200, -198, 2, 4, 6]

// 음성 -> 순서대로 지시 로봇...
// 변수에다가 함수를 담을수 있다.
const doA = function soulution(numbers) {
    var answer = [];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        // console.log(element);
        answer.push(element * 2);
    }
    return answer;
}

console.log(doA([1, 2, 100, -99, 1]));