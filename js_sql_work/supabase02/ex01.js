import { ordersMInsert, usersMInsert, usersSelectByEmail } from "./db.js";

// usersMInsert();
const userid = await usersSelectByEmail('qqq@naver.com');
ordersMInsert(userid);