const mongoose = require("mongoose")

const Schema = mongoose.Schema
const itemSchema = new Schema({
    name: {
        unique: true,
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: false,
    },
    image: {
        type: String,
        require: false
    },
    about: {
        type: String,
        require: false
    }
});

module.exports = mongoose.model('Item', itemSchema)