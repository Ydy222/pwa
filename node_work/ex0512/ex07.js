const util = require("util");
const crypto = require("crypto");

// crypto.randomBytes(64, (err, buf) => {
//   const key = buf.toString("base64");
//   console.log("key", key); // salt
// });

// const aa = util.promisify(crypto.randomBytes);
// aa(64).then((buf) => {
//   const key = buf.toString("base64");
//   console.log("key", key); // salt
// });

const myFunc = function (aa, bb, callback) {
  console.log(aa, bb);
  setTimeout(() => {
    callback(null, 'ㅁㄴㅇㄹ');
  }, 1000);
};

myFunc(1, 2, () => {
  console.log("ㅁㄴㅇㄹ");
});

const myFuncPromi = util.promisify(myFunc);

myFuncPromi(1, 2).then((result) => {
  console.log(result);
});
