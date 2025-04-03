// 숫자이루어져는지확인
const isDigit = (str)=> /^\d+$/.test(str);

console.log(isDigit('1234'));
console.log(isDigit('abcd'));
console.log(isDigit('12cd'));

// 문자로시작하는지확인
const isStartString = (str)=> /^[A-Za-z]/.test(str);

console.log(isStartString('abc123'));
console.log(isStartString('123abc'));

// email 유효성 검사
const isValidEmail = email => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

if(isValidEmail('aa@naver.com')){
    alert('다시 입력하세요');
}
