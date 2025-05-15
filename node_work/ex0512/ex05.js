// 단방향 -> 암호화O -> sha512 방식으로 sha512 => 100000회 반복 salt

// 양방향 -> 암호화O 복호화O

const crypto = require('crypto');
// 로그인 시켜주께
// password password -> 암호화..
// WRy2HrKLs/UQh37vigOVefRZg3jUNrylbXv25qCw7+zUPe6xlPFUwNrWux7CarkRkgQxrK8HdiWS8hYVUiDuHA==

crypto.randomBytes(64, (err, buf) => {
    if (err) {
        console.error(err);
        return;
    }
    // console.log(buf);
    // console.log(buf.toString());
    const key = buf.toString('base64');
    console.log('key',key); // salt
    crypto.pbkdf2('password', key, 100000, 64, 'sha512', (err, derivedKey) => {
        console.log('password',derivedKey.toString('base64')); // hash
    });
});

