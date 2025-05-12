const odd = "홀수 입니다";
const even = "짝수 입니다.";
const aa = ()=>{
    console.log('aa');
}
console.log("var.js");

// module 사용방법
/*
export const name="ㅅㄷㄴㅅ";
export const aaa = ()=>{
}
*/
// commonjs 사용방법
module.exports = {
  odd,
  even,
  aa
};

// module.exports = () => {
//   console.log("함수 보냄");
// };
