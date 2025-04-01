const arr = [1, 2, 3, 4, 5, 6];
const test = arr.filter((item, index) => index != 3);
console.log(test);

const review = [
    { uid: '123123123', title: "abcd", content: "" },
    { uid: '123123123', title: "aaaa" },
    { uid: '123123123', title: "ttie" }
]
// {} 적으면 return 생략 불가
const filterReview =
    review.filter((item) => {
        console.dir(`item = ${(item)}`);
        console.log(`item = ${JSON.stringify(item)}`);
        return item.title.includes('a');
    })

console.log(filterReview);

// es2023
// es2024 docker kubernates
// es2021 find findIndex
// console.log(arr.find(3));

// indexof 인덱스 번호를 찾아서 splice 삭제하는것보다

// 50만원...