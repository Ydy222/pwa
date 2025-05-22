// .env 파일에 내용을 읽어서 process.env.변수이름
require("dotenv").config();

const cors = require("cors"); // cors 모듈
const pool = require("./db");
const express = require("express");  // http 모듈 확장한 프레임워크
const app = express();
const path = require("path");  // 경로 관리 모듈
const morgan = require("morgan"); // (req,res,next=>{}) 미들웨어' 기록 남기는 모듈
const cookieParser = require("cookie-parser");

// 암호화
console.log(process.env.COOKIE_SECRET);

app.use(cors()); // cors 미들웨어 등록

// dev 개발단계 combined 실제운영 배포에서...
app.use(morgan("combined")); // 미들웨어 등록
// public 폴더에 해당하는 파일이 있으면 클라이언트한테 준다
// images, css, js, html 등등
app.use("/images", express.static(path.join(__dirname, "public")));
// req.query, req.body, req.params
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use((req, res, next) => {
    console.log("모든 요청은 여기 들렸다가 진행된다.");
    next();
});

app.get("/setCoo", (req, res, next) => {
    console.log("test");
    res.cookie("haha", "hoho", {
        expires: new Date(Date.now() + 1000 * 60),
        httpOnly: true,
        secure: true,
        signed: true,
    });
    res.send("여기옴");
});

app.get("/getCoo", (req, res, next) => {
    console.log(req.cookies);
    console.log(req.signedCookies);
    res.send("저기옴");
});

// select
app.get(
    "/",
    async (req, res, next) => {
        const conn = await pool.getConnection(); // 연결 객체 가져오기
        const result = await conn.execute("select * from users"); // sql 구문 실행
        conn.release(); // 연결 객체 반환
        next();
        // 끝...
        res.status(200).json(result[0]); // 클라이언트한테 hello get 보내기
        // res.status(200).json({aa:10,bb:20}); // 클라이언트한테 hello get 보내기
    },
    (req, res, next) => {
        console.log("일로오나");
    }
);

// insert
app.post("/", async (req, res) => {
    const conn = await pool.getConnection(); // 연결 객체 가져오기
    const result = await conn.execute(`insert into users 
                                     (id,password)
                                     values
                                     ('${req.body.name}','${req.body.age}')`); // sql 구문 실행
    conn.release(); // 연결 객체 반환
    res.send(result);
});

// update req.body 클라이언트 3개 ... id password idx
// delete users set id=?, password=? where idx=?
app.put("/", async (req, res) => {
    console.log(req.body);
    const conn = await pool.getConnection(); // 연결 객체 가져오기
    const sql = "update users set id=?, password=? where idx=?";
    const result = await conn.execute(sql,[
        req.body.id,
        req.body.password,
        req.body.idx,
    ]);
    conn.release()  // 연결 객체 반환
    res.send(result);
});
app.delete("/", (req, res) => {
    throw new Error("강제에러 발생");
    res.send("hello delete");
});

app.get("/html", (req, res) => {
    res.sendFile(path.join(__dirname, "./index.html"));
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send("에러가발생하였습니다.");
});

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});