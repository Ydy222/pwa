const http = require("http"); // npm i http
require("dotenv").config();
// env안에 있는 변수를 가지고 와서 process.env 객체 프로퍼티 추가

console.log(process.env.PWD); // 원래 기본 제공 됨
console.log(process.env.password); // dotenv config() 함수 호출해야 추가됨

http
  .createServer((req, res) => {
    console.log("암호화 password");
    console.log(req.url, req.headers.cookie);
    // try {
      aslkdfjncqwlkejrcn; // 에러 발생
    // } catch (e) {
    //   console.log(e);
    // }
    res.end("<html><head><body>123</body></head></html>");
  })
  .listen(8005, () => {
    console.log("8005포트로 실행 되었습니다.");
  });
