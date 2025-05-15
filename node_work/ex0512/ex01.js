const path = require("path");

console.log(path.join(__dirname, "b", "c", "d")); // a/b/c/d
// 파일 업로드 할때...
// aa2025051210430111.png 업로드 -> 두개 올렸다
// 덮어씌워진다... 원래 글에 파일이름 덮어씌워진다.

// UUID supabase -> uuid
console.log(path.extname("ex01.js"));
console.log(path.basename("ex01.js"));
console.log(path.dirname("ex01.js"));
console.log(path.parse("ex01.js"));

const { ext, name } = path.parse("ex01.js");

const fileName = `${name}-${Date.now()}${ext}`; // ex01-1234567890.js
console.log(path.join(__dirname,'images',fileName));
