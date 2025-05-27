require("dotenv").config();
const webpush = require('web-push');

webpush.setVapidDetails(
    "mailto:aaa@naver.com",
    'BCXJoTkXAUR1gTjWBzJCGtIi6qGXrw2LDtbGg5YuhgZdxyrTXHoO3UoX-spWSNcNbLUHmiIn_sxPNaKd5Cd9mxU',
    'l-jtmuatlgHd-SF2rmWFzMHlrkLOIsYZrV-iFEeqydc'
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

const ss = [];

app.post("/subscribe", (req, res, nest) => {
    console.log(req.body);
    ss.push({ sub: req.body });
    console.log(ss);
    res.send("구독 성공");
})

app.get("/send", async (req, res, nest) => {
    try {
        const payload = JSON.stringify({
            title: "new 알람",
            body: "푸시 알람 테스트",
            url: "https://front022.vercel.app/"
        });
        const notifications = ss.map(item => {
            console.log('item = ', item);
            return webpush.sendNotification(item.sub, payload);
        })
        console.log("notifications = ", notifications);
        await Promise.all(notifications);
        res.json({ messege: "푸시 알람 전송 성공" });
    } catch (e) {
        console.log(e);
        res.json({ messege: "푸시 알람 전송 실패" });
    }
});

app.listen(8080, () => {
    console.log("서버 8080 시작");
})