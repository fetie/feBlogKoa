const mongoose = require('mongoose')

const socialSchema = new mongoose.Schema({
    title: String,
    icon: String,
    color: String,
    href: String,
})

const Social = mongoose.model('socials', socialSchema)

module.exports = {
    Social
}