// try catch 를 사용하는 이유 프로그램 강제 종료 안되게...
try {
  // asdfsadf // 에러
//   throw new Error("에러 발생"); // 강제 종료...
  setTimeout(() => {
    throw new Error("에러 발생");
  }, 1000); // 강제 종료...
} catch (e) {
  console.error(e);
}

console.log("종료되었습니다.");
