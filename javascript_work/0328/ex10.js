const crypto = require('crypto');

const key = 'abcdefghijklmnopqrstuvwxyz123456';
const cipher = crypto.createCipheriv("aes-256-cbc", key, "1234567890123456");
console.log(cipher);

let result = cipher.update('password', 'utf-8', 'base64');
result += cipher.final('base64');
console.log(result);

const decipher = crypto.createDecipheriv('aes-256-cbc', key, '1234567890123456')
let result2 = decipher.update(result, 'base64', 'utf-8');
result2 += decipher.final('utf-8');
console.log(result2);