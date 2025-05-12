const str = "abcdef";

console.log(str.slice(0,3));

const result = str.slice(0,3) + str.slice(3,6);

console.log(result);

console.log(`문자열에서 표현식 ${str.slice(3)}`);