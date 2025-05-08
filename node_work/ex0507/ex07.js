const test = true;
new Promise((resolve, reject) => {
  if (test) resolve("성공");
}).then((res) => {
  console.log(res);
});

const promise = new Promise((resolve, reject) => {
  if (test) reject("실패");
});

console.log(promise);

promise
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });
