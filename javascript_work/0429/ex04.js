const a = 10;

// supabase -> promise
// fetch -> promise

function getPromise() {
  return new Promise((resolve, reject) => {
    if (a > 0) {
      resolve("정상적으로 되었습니다.");
    } else {
      reject("실패하였습니다.");
    }
  });
}
// promise 객체인데 아직 진행중인 상태
const test = getPromise()
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });
console.log(test);