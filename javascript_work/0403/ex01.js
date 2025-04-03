const str1 = "1234";
const str2 = "abcd";
const str3 = "12cd";

const re1 = /[\d]+/;
const re2 = /^\d+$/;

console.log(re1.test(str1));
console.log(re1.test(str2));
console.log(re1.test(str3));

console.log(re2.test(str1));
console.log(re2.test(str2));
console.log(re2.test(str3));