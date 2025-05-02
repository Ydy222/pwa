const http = require('http');

console.log(process.env.PWD);
console.log(process.env.password);

http.createServer((req, res) => {
    console.log(req.url, req.headers.cookie);
    res.end('Hello');
}).listen(8003, () => {
    console.log('server is running on port 8003');
});