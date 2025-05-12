new Error("에러 생성"); // 에러객체를 생성만 했을때는 예외 이벤트실행 X

try {
  throw new Error("에러 생성"); //여기에서 강제종료
} catch (e) {
  console.log("에러");
}

console.log("종료되었습니다.");
