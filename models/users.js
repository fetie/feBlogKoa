const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    pwd: String,
    avatar: {
        type:String,
        default:''
    },
    desc: {
        type:String,
        default:''
    },
    roles: Array,
})

const User = mongoose.model('users', userSchema)

module.exports = {
    User
}