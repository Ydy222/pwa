const SocketIO = require('socket.io');

module.exports = (server,app) => {
    const io = SocketIO(server, {path: '/socket.io'});
    app.set("io",io);

    const room = io.of('/room');
    const chat = io.of('/chat');

    room.on('connection', (socket) => {
        console.log('room 연결');
        socket.on('message', (msg) => {
            console.log(msg);
        })
    })
    chat.on('connection', (socket) => {
        console.log('chat연결');
        socket.on('join', (roomId) => {
            socket.join(roomId);
            console.log(`Room ${roomId} joined by socket ${socket.id}`);
        });
    })

    // io.on('connection', (socket) => { // 웹소켓 연결 시
    //     const req = socket.request;
    //     const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    //     socket.emit('message', '보내기');
    //     socket.on('disconnect', () => { // 연결 종료 시
    //         console.log('클라이언트 접속 해제', ip, socket.id);
    //         clearInterval(socket.interval);
    //     });
    //     socket.on('error', (error) => { // 에러 시
    //         console.error(error);
    //     });
    //     socket.on('message', (msg) => {
    //         console.log(msg);
    //     })
    // });

};
