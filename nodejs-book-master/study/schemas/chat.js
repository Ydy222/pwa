const mongoose = require('mongoose');

const {Schema} = mongoose;
const {ObjectId} = Schema.Types;
const chatSchema = new Schema({
    room: {
        type: ObjectId,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    chat: String,
    gif: String,
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('Chat', chatSchema);