
const crypto = require('crypto');
const util = require('util');

// 콜백 기반 함수를 Promise로 변환
const pbkdf2 = util.promisify(crypto.pbkdf2);
const randomBytes = util.promisify(crypto.randomBytes);

// 비밀번호 해시 함수
async function hashPassword(password) {
  const saltBuf = await randomBytes(64);
  const salt = saltBuf.toString('base64');
  const derivedKey = await pbkdf2(password, salt, 100000, 64, 'sha512');
  const hashed = derivedKey.toString('base64');
  return { salt, hashed };
}

// 비밀번호 검증 함수
async function verifyPassword(password, salt, storedHash) {
  const derivedKey = await pbkdf2(password, salt, 100000, 64, 'sha512');
  const hashed = derivedKey.toString('base64');
  return hashed === storedHash;
}

// 테스트
(async () => {
  const password = '1234';

  // 1. 비밀번호 저장
  const { salt, hashed } = await hashPassword(password);
  console.log('Salt:', salt);
  console.log('Hashed Password:', hashed);

  // 2. 로그인 시 입력값 검증
  const isMatch1 = await verifyPassword('1234', salt, hashed);
  const isMatch2 = await verifyPassword('wrong-password', salt, hashed);

  console.log('비밀번호 일치?', isMatch1); // true
  console.log('비밀번호 일치?', isMatch2); // false
})();
