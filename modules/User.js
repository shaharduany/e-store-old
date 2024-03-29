const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const userSchema = new Schema({
    username: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    history: {
        type: Array,
        required: false
    },
    cart: {
        type: Array,
        required: false
    },
    session: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('User', userSchema)