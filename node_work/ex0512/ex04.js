const cryto = require('crypto');

console.log(cryto.createHash('sha256').update('hello world').digest('hex'));
console.log(cryto.createHash('sha256').update('hello world').digest('base64'));

// uuid 생성
console.log(cryto.randomUUID());