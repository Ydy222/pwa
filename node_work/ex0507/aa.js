const bb = require('./bb.js');
console.log(bb);

require('./bb.js').bb.ddd();

// node 안에 기본 라이브러리 X
const dotenv = require('dotenv').config();
console.log(dotenv);

console.log(process.env.aa);
console.log(process.env.bb);