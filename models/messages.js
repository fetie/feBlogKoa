const mongoose = require('mongoose')

const moment=require('moment')

const messageSchema = new mongoose.Schema({
    email: String,
    content: String,
    ip: String,
    createTime:{
        type:Number,
        default:moment().unix()
    }
})

const Message = mongoose.model('message', messageSchema)

module.exports = {
    Message
}