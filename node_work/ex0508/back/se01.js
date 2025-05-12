const http = require("http");

http
  .createServer((req, res) => {
    console.log("통신함");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    console.log("req.metod", req.method);

    if (req.method === "OPTIONS") {
      res.writeHead("204"); // 200정상적이다 백엔드 살아있다.
      res.end();
      return;
    }
    if (req.method === "GET") res.end("return value");
    else if (req.method === "POST") {
      const objData = {};
      req.on("data", (chuck) => {
        // console.log(chuck);
        console.log(chuck.toString());
        const input = chuck.toString();
        const match = input.match(/name="name"\r?\n\r?\n([\s\S]*?)\r?\n/);
        if (match) {
          console.log(match[1]); // "김길동"
          objData.name = match[1];
        } else {
          console.log("값을 찾을 수 없습니다.");
        } 
        try {
          const datajson = JSON.parse(chuck.toString());
          console.log(datajson.name);
          console.log(datajson.age);
        } catch (e) {
          //   console.log(e);
        }
        console.log(objData);
      });
      res.end("supabase 데이터베이스에 저장함");
    } else {
      res.end("GET , POST 에 걸리지 않음");
    }
  })
  .listen(8005, () => {
    console.log("server 시작함");
  });
