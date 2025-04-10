// splice 는 리턴되는 값 없이 자기자신을 수정하는 함수

const arr = [1, 4];
arr.splice(1, 0, ...[2, 3, 4, 5, 6]);

// 1,4 사이에 2,3,4,5,6 넣어주세요
console.log(arr);
