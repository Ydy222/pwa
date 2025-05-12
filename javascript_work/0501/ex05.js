async function foo() {
  //   try {
  // fetch 첫반환값은 통신을 성공여부
  const result = await fetch(
    "https://09e0571f1a52874cde2b14.mockapi.io/todos/1"
  );
  const body = await result.json();

  // console.log(result);
  console.log(body);
  //   } catch (e) {
  //     console.log(e);
  //   }
  console.log("함수 종료");
  // try catch 가 없으면 프로그램 강제 종료 되므로 실행 안됨.
}

foo();

console.log("종료되었습니다.");
