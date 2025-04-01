// filter reduce
// boolrean 반환값에 따라서 필터링 하는것
const test = [
    { name: "홍길동", gender: "남자" },
    { name: "영희", gender: "여자" },
    { name: "김철수", gender: "남자" }
]
.filter(obj => obj.gender === '남자')
console.log(test);

const result = [1, 2, 3, 4, 5]
    .filter((item) => {
    console.log('test ' + item);
    // 무조건적으로 item 반환 되어서 배열로 만든다
    // return true;
    // false , true, false, true, false
    return item % 2 == 0;
});
console.log(result);
