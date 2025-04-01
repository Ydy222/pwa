// app.js

console.log('__dirname:', __dirname);
console.log('__filename:', __filename);

global.appName = 'MyNodeApp';
console.log('global.appName:', global.appName);

setTimeout(() => {
  console.log('1초 후 출력');
}, 1000);

console.log('process.env:', process.env.NODE_ENV);
