const isLoggedIn = "true" || "사용자";
// console.log(isLoggedIn); // "사용자"
console.log(isLoggedIn); // true
console.log(typeof isLoggedIn);

console.log(Boolean("true"));
console.log(Boolean(""));

const a = "" && "test";
console.log(`a = ${a}`);

console.log(Boolean({}));
console.log(Boolean([]));