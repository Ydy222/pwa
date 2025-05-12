const express = require('express');
const Room = require('../schemas/Room');
const Chat = require('../schemas/Chat');

const router = express.Router();

router.get('/', (req, res) => {
    console.log(req.session.color);
    res.render('index');
});

router.get('/room', async (req, res) => {
    try {
        const rooms = await Room.find({});
        res.render('room', {rooms, title: 'ROOMS'});
    } catch (err) {
        console.log(err);
    }
});

router.post('/room', async (req, res) => {
    try {
        const newRoom =
            await Room.create({
                title: req.body.title,
                max: req.body.max,
                owner: req.session.color,
                password: req.body.password,
            });
        const io = req.app.get('io');
        io.of('/room').emit('newRoom', newRoom);
    } catch (err) {
        console.log(err);
    }
})

router.get('/chat/:roomId', async (req, res) => {
    try {
        console.log("roomId")
        console.log(req.params.roomId);
        const chats
            = await Chat.find({room: req.params.roomId})
        console.log(chats);
        res.render('chat',
            {
                chats,
                user: req.session.color
            }
        );
    } catch (err) {
        console.log(err);
    }
});

router.post('/chat', async (req, res) => {
    try {
        const chat = await Chat.create({
            room: req.body.roomId,
            user: req.session.color,
            chat: req.body.chat,
        })
        console.log(req.body.roomId);
        req.app.get("io").of('chat').to(req.body.roomId).emit('chat', chat);
        res.send("ok");
    } catch (err) {
        console.log(err);
    }
})
module.exports = router;
