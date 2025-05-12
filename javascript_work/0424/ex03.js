console.log("완벽하게 될까");

// 처음에는 주소 요청했을때 요청되는지 안되는지에 대한 정보가 돌아옴
const test = await fetch("https://github.com/dron512/pwa/blob/main/test.html");

// 상태가 정상적이면 문자열로 변경해서 res에 담아 달라.
const res = await test.text();
console.log(res);

console.log("이것도 되냐");
// console.log(test);

async function doA() {
  return "test";
}
console.log(doA());
