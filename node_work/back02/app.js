require("dotenv").config();
const webpush = require('web-push');

webpush.setVapidDetails(
    "mailto:dron512@naver.com",
    'BJW_EkZfEVTVII8wj6Z74nVCd6Nh5EdLXB2_uIPL5HZAQDwX5hAWYekQJ5pxn0QJMgl5bdlt7xYwool4TlJFsII',
    'vph3MmgOM6skksFRXHJUKS9ox8ke6EtCS3UBe-jwGM8'
)

const cors = require("cors");

// const pool = require("./db");

const mymid = require("./mymiddle");
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const app = express();

app.use(morgan());
app.use(cors());
app.use("/images", express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));

// app.use(mymid);

app.get("/", (req, res, nest) => {
    console.log("/호출");
    res.send("클라이언트한테 보내기");
})

app.post("/subscribe", (req, res, nest) => {
    console.log(req.body);
    res.send("구독 성공");
})

app.listen(8080, () => {
    console.log("서버 8080 시작");
})