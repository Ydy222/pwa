//정수 배열 numbers가 주어집니다.
// numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 
// 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

// [2,1,3,4,1]	[2,3,4,5,6,7]
// [5,0,2,7]	[2,5,7,9,12]


// i = 0 j = 0~4
// i = 1 j = 0~4
// i = 2 j = 0~4 

function solution(numbers) {
    // set 중복을 제거 해서 넣는거
    // map ... object 키 속성을 "asdf" {}
    let answer = [];
    const myset = new Set();
    for (let i = 0; i < numbers.length; i++) {
        const a = numbers[i];
        for (let j = 0; j < numbers.length; j++) {
            const b = numbers[j];
            if (i != j) {
                // answer.push(a + b);
                myset.add(a + b);
            }
        }
    }
    answer = [...myset];
    // 12,9,7,5,2
    // sort 함수는..
    // 규칙 1 두수를 비교해서 a가 크면 양수
    // 규칙 2 두수를 비교해서 a==b 0리턴
    // 규칙 3 두수를 비교해서 b가 크면 음수
    answer.sort((a, b) => {return a - b});

    // 프로그래밍언어론 학문 -> 정보처리기사
    // 모든 프로그래밍 언어 c c++ 
    // java c# hashSet keySet hashMap
    // javascript python set map
    // 2015년 map filter forEach sort reduce => 
    // 매개변수를 함수로 고차함수
    return answer;
}

console.log(solution([5, 0, 2, 7]));