
const user = { profile: { name: "Alex" } };

console.log(user.profile?.name); // "Alex"
console.log(user.account?.email); // undefined (에러 발생 X)

console.log("정상 종료");