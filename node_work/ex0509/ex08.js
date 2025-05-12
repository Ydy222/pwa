const path = require('path');

console.log(path.join('folder', 'file.txt'));   // 'folder/file.txt' (POSIX 기준)
console.log(path.extname('index.html'));        // '.html'
console.log(path.basename('index.html'));
console.log(path.dirname('index.html'));