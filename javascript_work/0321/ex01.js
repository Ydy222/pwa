/* 
 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요.
 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 
 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

제한 조건
arr은 길이 1 이상인 배열입니다.
인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.
*/
// [4,3,2,1]	[4,3,2]
// [10]	        [-1]

// filter 함수는 return 값이 true 이면 그 요소를 반환
//              return 값이 false 이면 반환하지 않음.
// 화살표 함수는 여러줄을 작성이 중괄호 {} 필요합니다.
// 중괄호가 {} 들어오게 되면 return 생략 불가
// const result = [10, 20, 30, 40].filter((item, index, arr) => {
//     console.log(`item = ${item}`);
//     console.log(`index = ${index}`);
//     console.log(`arr = ${arr}`);
//     return item % 3 == 0;
// });
// console.log(result);

// slice 배열을 잘라서 복사
// splice 해당요소를 삭제 및 변경

const arr = [1, 2, 3, 4, 5];
arr.splice(2, 1, 10, 20);
console.log(arr);

function solution(arr) {
    // 1. 최소값 구하기
    // for forof reduce Math.min
    // arr = [4,3,2,1]
    // ...arr = 4,3,2,1
    // 2. 최소값을 배열에서 빼기
    // filter splice

    const min = Math.min(...arr);
    const minIndex = arr.indexOf(min);
    arr.splice(minIndex,1);
    const answer = arr;

    // const answer = arr.filter((item) => {
    //     return item !== min;
    // })
    if (answer.length == 0) return [-1];
    return answer;

}

console.log(solution([10]));