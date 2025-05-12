async function aa() {
  return "test";
}

console.log(aa());

// Pomise 꺼내는 방법
// 1. async await 사용
// 2. then() 사용
const baa = await aa();
console.log(baa);

aa().then((baa) => {
  console.log(baa);
  return "test";
});
