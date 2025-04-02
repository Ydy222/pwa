const str = 'abc123@naver.com';
const re = /[\w]+@+[A-Za-z]+.[A-Za-z]+/;

const arr = str.match(re);
console.log(arr);

console.log(re.test(str))// true false;

