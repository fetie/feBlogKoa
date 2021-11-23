const mongoose = require('mongoose')

const friendSchema = new mongoose.Schema({
    path: String,
    siteName: String,
    desc: String,
})

const Friends = mongoose.model('friend', friendSchema)

module.exports = {
    Friend: Friends
}