// react 
const data = [
    {
        review_num: 1, user_id: "40dcf945-4749-4891-8be1-cd7a431e39e3",
        name: "홍길동", title: "제목1", review_txt: "리뷰입니다11."
    },
    {
        review_num: 2, user_id: "40dcf945-4749-4891-8be1-cd7a431e39e3",
        name: "박길동", title: "제목2", review_txt: "리뷰입니다22."
    },
    {
        review_num: 3, user_id: "40dcf945-4749-4891-8be1-cd7a431e39e3",
        name: "이길동", title: "제목3", review_txt: "리뷰입니다33."
    }
];

const result = data.sort((a, b) => b.review_num - a.review_num);
// const result = data.sort((a, b) => a.name - b.name);
console.log(result);


// map div 화면