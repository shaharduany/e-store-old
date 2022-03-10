const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SessionSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    userID: {
        type: String, 
        required: false
    },
    lastIn: {
        type: Number,
        required: false
    }
});

module.exports = mongoose.model('Session', SessionSchema);