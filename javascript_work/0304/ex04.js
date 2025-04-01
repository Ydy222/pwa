
const username = "" || "Guest";  // "Guest" (빈 문자열도 falsy)
const username2 = "" ?? "Guest"; // "" (빈 문자열은 유지됨)
console.log(username, username2);

console.log(`username2 = ${username2}`);