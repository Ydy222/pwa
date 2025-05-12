const a = () => {
  throw new Error("에러 발생");
};

const b = () => {
  a();
};

const c = () => {
  b();
};

try {
  c();
} catch (e) {
  console.log(e);
}

console.log("종료되었습니다.");
