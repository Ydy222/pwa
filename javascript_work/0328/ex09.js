// filter로도 가능함...

// find id가 2번인 요소를 찾는 것
// findIndex id가 2번인 index를 찾는것
const myUsers = [
    { id: 1, name: "홍길동" },
    { id: 2, name: "이길동" },
    { id: 3, name: "박길동" },
];

// 1,2,3 3개월...
const result =
    myUsers.find((item) => {
        // console.log(item);
        return item.id === 2;
    });
console.log("=============result============")
console.log(result);

const resultIndex =
    myUsers.findIndex((item) => {
        // console.log(item);
        return item.id === 2;
    });
console.log("===========resultIndex=========")
console.log(resultIndex);