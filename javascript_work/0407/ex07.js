const arr = [10, 5, 3, 2, 6, 1];

// sort 콜백함수 규칙
// a>b 양수반환
// a==b 0을 반환
// a<b 음수반환
console.log(arr.sort((a, b) => b - a));

const brr = ["orange", "apple", "test", "water"];
console.log(brr.sort((a, b) => b.localeCompare(a)));

const crr = ["한국", "가나다라", "태스트입니다", "나무"];
console.log(crr.sort((a, b) => a.length - b.length));

// 소스변경