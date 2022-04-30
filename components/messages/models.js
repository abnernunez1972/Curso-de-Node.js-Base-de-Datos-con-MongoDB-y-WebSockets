const mongoose = require('mongoose');
const { users } = require('moongose/models');
const Schema = mongoose.Schema;

const mySchema = new Schema({
    user: {
        type : Schema.ObjectId,
        ref: 'User',
    },
    message: {
        type : String,
        required: true,
    },
    date: Date,
    file: String,
}) ;

const model = mongoose.model('Message',mySchema);
module.exports = model;
