const str = "http://www.naver.com?a=이웅모";

const enstr = encodeURI(str);
const destr = decodeURI(enstr);

console.log(enstr);
console.log(destr);

const enComstr = encodeURIComponent(str);
const deComstr = decodeURIComponent(enComstr);

console.log(enComstr);
console.log(deComstr);